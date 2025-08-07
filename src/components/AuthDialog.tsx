import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const AuthDialog = ({ open, onOpenChange }: AuthDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Faça login na sua conta</DialogTitle>
          <DialogDescription className="text-center">
            Entre para salvar seus produtos favoritos e receber alertas de preço
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {supabase ? (
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'hsl(var(--primary))',
                      brandAccent: 'hsl(var(--primary-dark))',
                      brandButtonText: 'white',
                      defaultButtonBackground: 'hsl(var(--muted))',
                      defaultButtonBackgroundHover: 'hsl(var(--muted-dark))',
                      inputBackground: 'hsl(var(--card))',
                      inputBorder: 'hsl(var(--border))',
                      inputBorderHover: 'hsl(var(--primary))',
                      inputBorderFocus: 'hsl(var(--primary))',
                      inputText: 'hsl(var(--foreground))',
                      inputLabelText: 'hsl(var(--foreground))',
                      messageText: 'hsl(var(--foreground))',
                      messageTextDanger: 'hsl(var(--destructive))',
                      anchorTextColor: 'hsl(var(--primary))',
                      anchorTextHoverColor: 'hsl(var(--primary-dark))',
                    },
                  },
                },
                className: {
                  container: 'space-y-4',
                  button: 'w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  input: 'w-full rounded-lg border px-3 py-2 text-sm',
                  label: 'text-sm font-medium',
                  loader: 'animate-spin',
                },
              }}
              providers={['google']}
              redirectTo={window.location.origin}
              onlyThirdPartyProviders
              localization={{
                variables: {
                  sign_in: {
                    social_provider_text: 'Continuar com {{provider}}',
                  },
                },
              }}
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Supabase não está configurado. Configure a integração para habilitar o login.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}