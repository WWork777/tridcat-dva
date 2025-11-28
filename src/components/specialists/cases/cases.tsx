// components/specialists/cases/CasesAccordion.tsx
"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./cases.module.scss";

interface Case {
  id: string;
  title: string;
  description?: string;
  beforeImage: {
    src: string;
    alt: string;
  };
  afterImage?: {
    src: string;
    alt: string;
  };
  details?: string;
  duration?: string;
}

interface CasesAccordionProps {
  cases: Case[];
}

export default function CasesAccordion({ cases }: CasesAccordionProps) {
  const renderCaseAccordion = (caseItem: Case, idx: number) => {
    const panelId = `case-panel-${idx + 1}`;
    const headerId = `case-header-${idx + 1}`;
    
    return (
      <Accordion
        key={caseItem.id}
        className={styles.lightAccordion}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls={panelId}
          id={headerId}
        >
          <div className={styles.accordionHeader}>
            <Typography component="h3" className={styles.accordionTitle}>
              {caseItem.title}
            </Typography>
            {caseItem.duration && (
              <div className={styles.accordionControls}>
                <span className={styles.caseDuration}>{caseItem.duration}</span>
              </div>
            )}
          </div>
        </AccordionSummary>
        
        <AccordionDetails id={panelId} aria-labelledby={headerId}>
          <div className={styles.caseDetails}>
            {caseItem.description && (
              <Typography className={styles.accordionContent}>
                {caseItem.description}
              </Typography>
            )}
            
            <div className={styles.imagesContainer}>
              <div className={styles.imageWrapper}>
                {caseItem.afterImage && <div className={styles.imageLabel}>До</div>}
                <div className={styles.imageContainer}>
                  <Image
                    src={caseItem.beforeImage.src}
                    alt={caseItem.beforeImage.alt}
                    width={400}
                    height={300}
                    className={styles.caseImage}
                    priority={idx === 0}
                  />
                </div>
              </div>
              {caseItem.afterImage && 
              <div className={styles.imageWrapper}>
                <div className={styles.imageLabel}>После</div>
                <div className={styles.imageContainer}>

                
                  <Image
                    src={caseItem.afterImage.src}
                    alt={caseItem.afterImage.alt}
                    width={400}
                    height={300}
                    className={styles.caseImage}
                    priority={idx === 0}
                  />
                  
                </div>
              </div>
              }
            </div>
            
            {caseItem.details && (
              <div className={styles.caseMeta}>
                <div className={styles.metaItem}>
                  <strong>Описание работы:</strong>
                  <span>{caseItem.details}</span>
                </div>
              </div>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <section className={styles.casesContainer} aria-labelledby="cases-title">
      <div className={styles.casesAccordion}>
        {cases.map((caseItem, idx) => renderCaseAccordion(caseItem, idx))}
      </div>
    </section>
  );
}