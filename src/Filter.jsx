import React, { useState } from 'react';

const filterSections = [
  "Ideal For",
  "Occasion",
  "Work",
  "Fabric",
  "Segment",
  "Suitable For",
  "Raw Materials",
  "Pattern",
];

const Filter = () => {
  const [openSections, setOpenSections] = useState({});
  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.checkboxWrapper}>
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable" style={styles.label}>CUSTOMIZBLE</label>
      </div>

      {filterSections.map((section) => (
        <div key={section} style={styles.section}>
          <div
            style={styles.sectionHeader}
            onClick={() => toggleSection(section)}
          >
            <span style={styles.sectionTitle}>{section.toUpperCase()}</span>
            <span style={styles.arrow}>{openSections[section] ? "▴" : "▾"}</span>
          </div>
          {openSections[section] && (
            <div style={styles.sectionBody}>
              <span style={styles.option}>All</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '250px',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    padding: '10px',
    borderRight: '1px solid #eee',
  },
  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  label: {
    marginLeft: '8px',
    fontWeight: '600',
    fontSize: '13px',
  },
  section: {
    borderTop: '1px solid #eee',
    padding: '10px 0',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: '13px',
  },
  arrow: {
    fontSize: '13px',
  },
  sectionBody: {
    marginTop: '8px',
    paddingLeft: '8px',
  },
  option: {
    color: '#555',
    fontSize: '13px',
  }
};

export default Filter;
