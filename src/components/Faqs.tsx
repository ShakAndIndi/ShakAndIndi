import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can I embed stories in my mobile app?',
      answer:
        'Yes! You can also add them to your website, or smart TV app.',
    },
    {
      question: 'Can I start without contacting you?',
      answer: "We're early on in our journey, so contacting us is the only option for now. Automated process coming soon!",
    },
    {
      question: 'I have a lot of media files in Amazon S3. Can I use that instead of re-uploading them?',
      answer: "Connecting to your existing storage buckets is on our roadmap. For now, our solution is the quickest way to start.",
    },
  ],
  [
    {
      question: 'Is it possible to license the code?',
      answer: 'The code is our IP and cannot be licensed.',
    },
    {
      question:
        'Where can we get analytics of story usage?',
      answer:
        "You'll receive monthly automated reports detailing most popular stories and narrative branches.",
    },
    {
      question:
        'Is there a business model where I pay a set amount each month?',
      answer:
        'Our current model ensures you only pay for customers you actually have. This keeps costs low for you and us incentivised to build better software.',
    },
  ],
  [
    {
      question: 'Can I use this to make a computer game?',
      answer:
        "Our product blurs the line of story telling and computer games. Contact us and let's understand your vision.",
    },
    {
      question: 'Is there a public roadmap or feature request form?',
      answer: "Not just yet. Contact us and share your business needs.",
    },
    {
      question: 'Can we pay you to prioritise certain features?',
      answer: 'Maybe. We have a clear vision of the product direction, however we are open to conversation.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
