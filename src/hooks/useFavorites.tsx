import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import { useToast } from '@/hooks/use-toast'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

export const useFavorites = () => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchFavorites()
    } else {
      setFavorites([])
      setLoading(false)
    }
  }, [user])

  const fetchFavorites = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .select('product_id')
        .eq('user_id', user.id)

      if (error) throw error

      setFavorites(data?.map(item => item.product_id) || [])
    } catch (error) {
      console.error('Erro ao buscar favoritos:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleFavorite = async (product: Product) => {
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Faça login para adicionar produtos aos favoritos",
        variant: "destructive",
      })
      return
    }

    const isFavorite = favorites.includes(product.id)

    try {
      if (isFavorite) {
        // Remove dos favoritos
        const { error } = await supabase
          .from('user_favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', product.id)

        if (error) throw error

        setFavorites(favorites.filter(id => id !== product.id))
        toast({
          title: "Removido dos favoritos",
          description: `${product.name} foi removido dos seus favoritos`,
        })
      } else {
        // Adiciona aos favoritos
        const { error } = await supabase
          .from('user_favorites')
          .insert({
            user_id: user.id,
            product_id: product.id,
            product_name: product.name,
            product_image: product.image,
            current_price: product.price,
          })

        if (error) throw error

        setFavorites([...favorites, product.id])
        toast({
          title: "Adicionado aos favoritos",
          description: `${product.name} foi adicionado aos seus favoritos`,
        })
      }
    } catch (error) {
      console.error('Erro ao gerenciar favorito:', error)
      toast({
        title: "Erro",
        description: "Não foi possível atualizar os favoritos",
        variant: "destructive",
      })
    }
  }

  const isFavorite = (productId: string) => {
    return favorites.includes(productId)
  }

  return {
    favorites,
    loading,
    toggleFavorite,
    isFavorite,
  }
}