import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import '../css/components/FooterContact.css'

type SubmitState = 'idle' | 'success' | 'error'

const INITIAL_FORM = {
  name: '',
  email: '',
  body: '',
}

export default function FooterContact() {
  const [formValues, setFormValues] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState('idle')
    setStatusMessage('')

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: formValues.name,
          email: formValues.email,
          message: formValues.body,
        },
        {
          publicKey: EMAILJS_CONFIG.publicKey,
        },
      )

      setFormValues(INITIAL_FORM)
      setSubmitState('success')
      setStatusMessage("I've got your message! I will get back to you shortly.")
    } catch {
      setSubmitState('error')
      setStatusMessage('Something went wrong. Email me directly at evanlunceford3@gmail.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="footer-contact">
      <div className="footer-contact__inner">
        <div className="footer-contact__intro">
          <p className="footer-contact__eyebrow">Stay In Touch</p>
          <h2 className="footer-contact__title">Contact Me</h2>
          <p className="footer-contact__copy">
            Send a quick note and I will see it in my inbox.
          </p>
        </div>

        <form className="footer-contact__form" onSubmit={handleSubmit}>
          <label className="footer-contact__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
              required
            />
          </label>

          <label className="footer-contact__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formValues.email}
              onChange={(event) => setFormValues((current) => ({ ...current, email: event.target.value }))}
              required
            />
          </label>

          <label className="footer-contact__field">
            <span>Message</span>
            <textarea
              name="body"
              rows={5}
              placeholder="Write your message here..."
              value={formValues.body}
              onChange={(event) => setFormValues((current) => ({ ...current, body: event.target.value }))}
              required
            />
          </label>

          <div className="footer-contact__actions">
            <button type="submit" className="footer-contact__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p
              className={`footer-contact__status footer-contact__status--${submitState}`}
              aria-live="polite"
            >
              {statusMessage}
            </p>
          </div>
        </form>
      </div>
    </footer>
  )
}
