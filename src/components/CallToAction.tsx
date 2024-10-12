import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden  py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight ">
            Weave stories as complex as you can image
          </p>
          <Button href="mailto:hello@shakandindi.com"  className="mt-10">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  )
}
