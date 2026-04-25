import { useEffect, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs";
import "../../css/components/DesignInquiryModal.css";

type DesignInquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SubmitState = "idle" | "success" | "error";

type ProjectType = "Starter Website" | "Dynamic Website" | "Custom Software";

type InquiryForm = {
  name: string;
  email: string;
  projectType: ProjectType | "";
  projectSummary: string;
};

const PROJECT_TYPES: { value: ProjectType; description: string }[] = [
  {
    value: "Starter Website",
    description: "A clean marketing site for credibility, SEO basics, and lead capture.",
  },
  {
    value: "Dynamic Website",
    description: "A richer site with forms, data, automations, accounts, or custom flows.",
  },
  {
    value: "Custom Software",
    description: "A tailored platform, portal, internal tool, or workflow built around your business.",
  },
];

const INITIAL_FORM: InquiryForm = {
  name: "",
  email: "",
  projectType: "",
  projectSummary: "",
};

export default function DesignInquiryModal({ isOpen, onClose }: DesignInquiryModalProps) {
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setFormValues(INITIAL_FORM);
      setIsSubmitting(false);
      setSubmitState("idle");
      setStatusMessage("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValues.projectType) {
      setSubmitState("error");
      setStatusMessage("Please choose the type of project you want to build.");
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");
    setStatusMessage("");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.designInquiryTemplateId,
        {
          name: formValues.name,
          email: formValues.email,
          project_type: formValues.projectType,
          project_summary: formValues.projectSummary,
          message: [
            `Project type: ${formValues.projectType}`,
            `Project summary: ${formValues.projectSummary}`,
          ].join("\n"),
          source: "design_inquiry_modal",
        },
        {
          publicKey: EMAILJS_CONFIG.publicKey,
        },
      );

      setSubmitState("success");
      setStatusMessage("Your project note is in my inbox. I'll follow up soon.");
      setFormValues(INITIAL_FORM);
    } catch {
      setSubmitState("error");
      setStatusMessage("Something went wrong. Email me directly at evanlunceford3@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="presentation">
      <section
        className="project-modal design-inquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="design-inquiry-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-modal-header design-inquiry-modal__header">
          <div className="project-modal-header-left">
            <h2 className="project-modal-title" id="design-inquiry-modal-title">
              Start Your Project
            </h2>
            <p className="project-modal-description">
              Pick the closest fit, share one sentence about what you are trying to build or improve, and I'll reach
              back out by email.
            </p>
          </div>

          <div className="project-modal-header-right">
            <button className="project-modal-close" type="button" aria-label="Close project inquiry modal" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <form className="design-inquiry-modal__form" onSubmit={handleSubmit}>
          <div className="design-inquiry-modal__field-grid">
            <label className="design-inquiry-modal__field">
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

            <label className="design-inquiry-modal__field">
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
          </div>

          <div className="design-inquiry-modal__project-type">
            <div className="design-inquiry-modal__legend-row">
              <span className="design-inquiry-modal__legend">What type of project?</span>
            </div>
            <div className="design-inquiry-modal__type-grid" role="radiogroup" aria-label="Project type">
              {PROJECT_TYPES.map((type) => {
                const isSelected = formValues.projectType === type.value;

                return (
                  <button
                    key={type.value}
                    type="button"
                    className={`design-inquiry-modal__type-card${isSelected ? " design-inquiry-modal__type-card--selected" : ""}`}
                    onClick={() => setFormValues((current) => ({ ...current, projectType: type.value }))}
                    aria-pressed={isSelected}
                  >
                    <strong>{type.value}</strong>
                    <span>{type.description}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <label className="design-inquiry-modal__field">
            <span>One sentence about your project</span>
            <textarea
              name="projectSummary"
              rows={4}
              placeholder="What are you trying to build or improve?"
              value={formValues.projectSummary}
              onChange={(event) => setFormValues((current) => ({ ...current, projectSummary: event.target.value }))}
              required
            />
          </label>

          <div className="design-inquiry-modal__actions">
            <button type="submit" className="project-modal-link design-inquiry-modal__submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <p className={`design-inquiry-modal__status design-inquiry-modal__status--${submitState}`} aria-live="polite">
              {statusMessage}
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
