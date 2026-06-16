import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Image as ImageIcon,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectGallery({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(() => {
    if (project?.images?.length) return project.images;

    if (project?.image) {
      return [
        {
          src: project.image,
          label: project.imageLabel || project.title,
          alt: project.imageLabel || project.title,
          caption: "Main project preview",
        },
      ];
    }

    return [];
  }, [project]);

  const activeImage = images[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [project?.title]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight" && images.length > 1) {
        setActiveIndex((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft" && images.length > 1) {
        setActiveIndex((current) =>
          current === 0 ? images.length - 1 : current - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const galleryModal = (
    <motion.div
      className="project-gallery-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-gallery-panel"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-gallery-close"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          aria-label="Close project gallery"
        >
          <X size={18} />
        </button>

        <div className="project-gallery-media-column">
          <div className="project-gallery-main">
            {activeImage ? (
              <img
                src={activeImage.src}
                alt={activeImage.alt || activeImage.label || project.title}
                className="project-gallery-main-image"
              />
            ) : (
              <div className="project-gallery-empty">
                <ImageIcon size={36} />
                <p>No project images added yet</p>
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="project-gallery-nav project-gallery-nav-left"
                  onClick={showPrevious}
                  aria-label="Show previous project image"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  className="project-gallery-nav project-gallery-nav-right"
                  onClick={showNext}
                  aria-label="Show next project image"
                >
                  <ArrowRight size={18} />
                </button>
              </>
            )}

            {images.length > 0 && (
              <div className="project-gallery-counter">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </div>
            )}
          </div>

          {activeImage?.caption && (
            <p className="project-gallery-caption">{activeImage.caption}</p>
          )}

          {images.length > 1 && (
            <div className="project-gallery-thumbs">
              {images.map((image, imageIndex) => (
                <button
                  key={`${image.src}-${imageIndex}`}
                  type="button"
                  className={`project-gallery-thumb ${
                    imageIndex === activeIndex ? "is-active" : ""
                  }`}
                  onClick={() => setActiveIndex(imageIndex)}
                  aria-label={`Show ${image.label || project.title}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt || image.label || project.title}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <aside className="project-gallery-info">
          <p className="project-gallery-kicker">{project.category}</p>

          <h3>{project.title}</h3>

          <p className="project-gallery-role">{project.role}</p>

          <p className="project-gallery-description">{project.description}</p>

          <div className="project-gallery-highlights">
            {project.highlights.map((item) => (
              <div key={item} className="project-highlight">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="project-gallery-stack">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-gallery-actions">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-gallery-github"
              >
                <FaGithub />
                View GitHub
                <ExternalLink size={15} />
              </a>
            ) : (
              <span className="project-gallery-private">
                GitHub link not added yet
              </span>
            )}
          </div>
        </aside>
      </motion.div>
    </motion.div>
  );

  return createPortal(galleryModal, document.body);
}
