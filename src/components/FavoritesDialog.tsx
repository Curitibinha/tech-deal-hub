import { useState, useEffect } from 'react'
import { Heart, Trash2, Bell, TrendingDown } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

interface Favorite {
  id: string
  product_id: string
  product_name: string
  product_image: string
  current_price: number
  target_price: number | null
  created_at: string
}

interface FavoritesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const FavoritesDialog = ({ open, onOpenChange }: FavoritesDialogProps) => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [loading, setLoading] = useState(true)
  const [targetPrices, setTargetPrices] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (open && user) {
      fetchFavorites()
    }
  }, [open, user])

  const fetchFavorites = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error

      setFavorites(data || [])
    } catch (error) {
      console.error('Erro ao buscar favoritos:', error)
      toast({
        title: "Erro",
        description: "Não foi possível carregar seus favoritos",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const removeFavorite = async (favoriteId: string) => {
    try {
      const { error } = await supabase
        .from('user_favorites')
        .delete()
        .eq('id', favoriteId)

      if (error) throw error

      setFavorites(favorites.filter(fav => fav.id !== favoriteId))
      toast({
        title: "Removido",
        description: "Produto removido dos favoritos",
      })
    } catch (error) {
      console.error('Erro ao remover favorito:', error)
      toast({
        title: "Erro",
        description: "Não foi possível remover o produto",
        variant: "destructive",
      })
    }
  }

  const updateTargetPrice = async (favoriteId: string, targetPrice: number) => {
    try {
      const { error } = await supabase
        .from('user_favorites')
        .update({ target_price: targetPrice })
        .eq('id', favoriteId)

      if (error) throw error

      // Criar alerta de preço
      await supabase.from('price_alerts').insert({
        user_id: user!.id,
        favorite_id: favoriteId,
        alert_price: targetPrice,
        is_active: true,
      })

      setFavorites(favorites.map(fav => 
        fav.id === favoriteId ? { ...fav, target_price: targetPrice } : fav
      ))

      toast({
        title: "Alerta criado",
        description: `Você será notificado quando o preço chegar a R$ ${targetPrice.toFixed(2)}`,
      })
    } catch (error) {
      console.error('Erro ao criar alerta:', error)
      toast({
        title: "Erro",
        description: "Não foi possível criar o alerta de preço",
        variant: "destructive",
      })
    }
  }

  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Meus Favoritos
          </DialogTitle>
          <DialogDescription>
            Gerencie seus produtos favoritos e configure alertas de preço
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-sm text-muted-foreground mt-2">Carregando favoritos...</p>
            </div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium">Nenhum favorito ainda</p>
              <p className="text-sm text-muted-foreground">
                Adicione produtos aos favoritos para monitorar preços
              </p>
            </div>
          ) : (
            favorites.map((favorite) => (
              <Card key={favorite.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-2xl">
                        {favorite.product_image}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-sm font-medium leading-tight">
                          {favorite.product_name}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          Adicionado em {new Date(favorite.created_at).toLocaleDateString('pt-BR')}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFavorite(favorite.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">
                        R$ {favorite.current_price.toFixed(2)}
                      </span>
                      {favorite.target_price && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Bell className="h-3 w-3" />
                          Meta: R$ {favorite.target_price.toFixed(2)}
                        </Badge>
                      )}
                    </div>
                    {favorite.target_price && favorite.current_price <= favorite.target_price && (
                      <Badge variant="default" className="flex items-center gap-1 bg-green-600">
                        <TrendingDown className="h-3 w-3" />
                        Meta atingida!
                      </Badge>
                    )}
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <Label htmlFor={`target-${favorite.id}`} className="text-xs">
                        Alerta de preço (R$)
                      </Label>
                      <Input
                        id={`target-${favorite.id}`}
                        type="number"
                        step="0.01"
                        placeholder="Ex: 899.90"
                        value={targetPrices[favorite.id] || ''}
                        onChange={(e) => setTargetPrices({
                          ...targetPrices,
                          [favorite.id]: e.target.value
                        })}
                        className="h-8 text-sm"
                      />
                    </div>
                    <Button
                      size="sm"
                      onClick={() => {
                        const price = parseFloat(targetPrices[favorite.id])
                        if (price > 0) {
                          updateTargetPrice(favorite.id, price)
                          setTargetPrices({
                            ...targetPrices,
                            [favorite.id]: ''
                          })
                        }
                      }}
                      disabled={!targetPrices[favorite.id] || parseFloat(targetPrices[favorite.id]) <= 0}
                    >
                      <Bell className="h-3 w-3 mr-1" />
                      Criar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}