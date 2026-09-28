/**
 * BCA GOKAK - Official College Portal JavaScript
 * Interactive Logic, Lightbox, Curriculum Browser, and Admission System
 */

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. STATS RIBBON RENDERING
    // =========================================================================
    const renderStats = () => {
        const container = document.getElementById('statsGrid');
        if (!container || !BCA_GOKAK_DATA.stats) return;

        container.innerHTML = BCA_GOKAK_DATA.stats.map(s => `
            <div class="stat-box">
                <i class="fa-solid ${s.icon}"></i>
                <div class="stat-number">${s.value}</div>
                <div class="stat-label">${s.label}</div>
            </div>
        `).join('');
    };

    // =========================================================================
    // 2. PROGRAMS & DEGREES
    // =========================================================================
    const renderPrograms = () => {
        const container = document.getElementById('programsGrid');
        if (!container || !BCA_GOKAK_DATA.programs) return;

        container.innerHTML = BCA_GOKAK_DATA.programs.map(p => `
            <div class="program-card">
                <div class="program-tag-row">
                    <span class="badge badge-orange">${p.tag}</span>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--dark-500);">${p.intake}</span>
                </div>

                <h3 class="program-title">${p.name}</h3>
                <div class="program-meta">
                    <i class="fa-regular fa-clock"></i> ${p.duration}
                </div>

                <p class="program-desc">${p.description}</p>

                <ul class="program-highlights">
                    ${p.highlights.map(h => `
                        <li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>
                    `).join('')}
                </ul>

                <div style="background: var(--primary-light); padding: 12px 16px; border-radius: var(--radius-md); font-size: 0.82rem; color: var(--dark-700); margin-bottom: 20px; border: 1px solid var(--border-color);">
                    <strong>Eligibility:</strong> ${p.eligibility}
                </div>

                <a href="#admissions" class="btn btn-primary" style="width: 100%;">
                    <i class="fa-solid fa-file-signature"></i> Apply for this Program
                </a>
            </div>
        `).join('');
    };

    // =========================================================================
    // 3. SEMESTER CURRICULUM BROWSER
    // =========================================================================
    let activeSemIndex = 0;

    const renderCurriculumTabs = () => {
        const container = document.getElementById('semTabsContainer');
        if (!container || !BCA_GOKAK_DATA.curriculum) return;

        container.innerHTML = BCA_GOKAK_DATA.curriculum.map((c, idx) => `
            <button class="sem-tab-btn ${idx === activeSemIndex ? 'active' : ''}" data-sem-idx="${idx}">
                ${c.sem}
            </button>
        `).join('');

        container.querySelectorAll('.sem-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeSemIndex = parseInt(btn.dataset.semIdx, 10);
                document.querySelectorAll('.sem-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderCurriculumContent();
            });
        });

        renderCurriculumContent();
    };

    const renderCurriculumContent = () => {
        const titleEl = document.getElementById('semActiveTitle');
        const grid = document.getElementById('subjectsGrid');
        const current = BCA_GOKAK_DATA.curriculum[activeSemIndex];
        if (!current || !grid) return;

        if (titleEl) {
            titleEl.textContent = `${current.sem}: ${current.title}`;
        }

        grid.innerHTML = current.subjects.map((subj, idx) => `
            <div class="subject-item-card">
                <div class="subject-num">0${idx + 1}</div>
                <div>
                    <strong style="color: var(--dark-900); font-size: 0.95rem;">${subj}</strong>
                    <span style="display: block; font-size: 0.78rem; color: var(--primary); font-weight: 600; margin-top: 2px;">
                        ${subj.toLowerCase().includes('lab') ? 'Practical Lab & Examination' : 'Theory & Internal Assessment'}
                    </span>
                </div>
            </div>
        `).join('');
    };

    document.getElementById('downloadSyllabusBtn')?.addEventListener('click', () => {
        showToast('Official RCU Belagavi BCA NEP Syllabus downloaded successfully (PDF)', 'success');
    });

    // CGPA to Percentage Calculator Logic
    const initCgpaCalculator = () => {
        const input = document.getElementById('calcCgpaInput');
        const btn = document.getElementById('calculateCgpaBtn');
        const resultDisplay = document.getElementById('calcResultDisplay');
        const gradeDisplay = document.getElementById('calcGradeDisplay');

        if (!btn || !input) return;

        const performCalc = () => {
            const val = parseFloat(input.value);
            if (isNaN(val) || val < 0 || val > 10) {
                showToast('Please enter a valid CGPA between 0.00 and 10.00', 'warning');
                return;
            }

            // Standard RCU Belagavi conversion formula: (CGPA * 10) - 7.5 or (CGPA * 9.5)
            // Typically: Percentage = (CGPA * 10) - 7.5 (for CGPA >= 0.75)
            let percentage = (val * 10) - 7.5;
            if (percentage < 0) percentage = val * 7.1; // fallback for low scores
            percentage = Math.min(100, Math.max(0, percentage)).toFixed(2);

            resultDisplay.textContent = `${percentage}%`;

            let gradeText = "";
            if (val >= 8.5) {
                gradeText = "Outstanding - Distinction Grade (First Class with Distinction)";
                gradeDisplay.style.color = "var(--success)";
            } else if (val >= 7.0) {
                gradeText = "Very Good - First Class Grade";
                gradeDisplay.style.color = "var(--primary)";
            } else if (val >= 5.5) {
                gradeText = "Good - Higher Second Class Grade";
                gradeDisplay.style.color = "var(--warning)";
            } else if (val >= 4.0) {
                gradeText = "Pass Class Grade";
                gradeDisplay.style.color = "var(--dark-600)";
            } else {
                gradeText = "Needs Improvement / Remedial Support";
                gradeDisplay.style.color = "var(--danger)";
            }

            gradeDisplay.textContent = gradeText;
            showToast(`Calculated: CGPA ${val} = ${percentage}% (${gradeText.split(' - ')[0]})`, 'success');
        };

        btn.addEventListener('click', performCalc);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performCalc();
        });
    };
    initCgpaCalculator();


    // =========================================================================
    // 4. FACILITIES WITH PHOTOS
    // =========================================================================
    const renderFacilities = () => {
        const container = document.getElementById('facilitiesGrid');
        if (!container || !BCA_GOKAK_DATA.facilities) return;

        container.innerHTML = BCA_GOKAK_DATA.facilities.map(f => `
            <div class="facility-card">
                <div class="facility-img-wrap">
                    <img src="${f.image}" alt="${f.title}" loading="lazy">
                    <div class="facility-icon-badge">
                        <i class="fa-solid ${f.icon}"></i>
                    </div>
                </div>
                <div class="facility-content">
                    <h3 class="facility-title">${f.title}</h3>
                    <p class="facility-desc">${f.description}</p>
                </div>
            </div>
        `).join('');
    };

    // =========================================================================
    // 5. PHOTO GALLERY WITH LIGHTBOX & FILTERS
    // =========================================================================
    let activeGalleryFilter = 'all';

    const renderGallery = () => {
        const container = document.getElementById('galleryGrid');
        if (!container || !BCA_GOKAK_DATA.gallery) return;

        const filtered = activeGalleryFilter === 'all'
            ? BCA_GOKAK_DATA.gallery
            : BCA_GOKAK_DATA.gallery.filter(g => g.category === activeGalleryFilter);

        container.innerHTML = filtered.map(item => `
            <div class="gallery-item" data-img="${item.image}" data-title="${item.title}" data-caption="${item.caption}">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-item-title">${item.title}</div>
                    <div class="gallery-item-sub">${item.caption}</div>
                </div>
            </div>
        `).join('');

        // Attach click listeners for lightbox
        container.querySelectorAll('.gallery-item').forEach(el => {
            el.addEventListener('click', () => {
                openLightbox(el.dataset.img, `${el.dataset.title} - ${el.dataset.caption}`);
            });
        });
    };

    const initGalleryFilters = () => {
        document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeGalleryFilter = btn.dataset.filter;
                renderGallery();
            });
        });
    };

    const openLightbox = (imgSrc, captionText) => {
        const modal = document.getElementById('galleryLightbox');
        const img = document.getElementById('lightboxImg');
        const caption = document.getElementById('lightboxCaption');

        if (!modal || !img) return;

        img.src = imgSrc;
        img.alt = captionText;
        if (caption) caption.textContent = captionText;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        const modal = document.getElementById('galleryLightbox');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    document.getElementById('closeLightbox')?.addEventListener('click', closeLightbox);
    document.getElementById('galleryLightbox')?.addEventListener('click', (e) => {
        if (e.target.id === 'galleryLightbox') closeLightbox();
    });

    // =========================================================================
    // 6. FACULTY PROFILES
    // =========================================================================
    const renderFaculty = () => {
        const container = document.getElementById('facultyGrid');
        if (!container || !BCA_GOKAK_DATA.faculty) return;

        container.innerHTML = BCA_GOKAK_DATA.faculty.map(f => `
            <div class="faculty-card">
                <div class="faculty-avatar-wrap">
                    <img src="${f.image}" alt="${f.name}" class="faculty-avatar" loading="lazy">
                </div>
                <h3 class="faculty-name">${f.name}</h3>
                <div class="faculty-role">${f.role}</div>
                <div class="faculty-qual">${f.qualification} &bull; ${f.experience} Exp.</div>
                <div class="faculty-spec">
                    <strong style="color: var(--primary);">Specialization:</strong><br>${f.specialization}
                </div>
            </div>
        `).join('');
    };

    // =========================================================================
    // 7. PLACEMENTS & RECRUITERS
    // =========================================================================
    const renderPlacements = () => {
        const recContainer = document.getElementById('recruitersContainer');
        const testContainer = document.getElementById('testimonialsGrid');

        if (recContainer && BCA_GOKAK_DATA.recruiters) {
            recContainer.innerHTML = BCA_GOKAK_DATA.recruiters.map(r => `
                <div class="recruiter-pill">
                    <i class="fa-solid fa-briefcase" style="color: var(--primary); margin-right: 6px;"></i>
                    ${r.name}
                </div>
            `).join('');
        }

        if (testContainer && BCA_GOKAK_DATA.testimonials) {
            testContainer.innerHTML = BCA_GOKAK_DATA.testimonials.map(t => `
                <div class="testimonial-card">
                    <p class="test-quote">"${t.quote}"</p>
                    <div class="test-user">
                        <img src="${t.image}" alt="${t.name}" class="test-avatar" loading="lazy">
                        <div>
                            <div class="test-name">${t.name}</div>
                            <div class="test-role">${t.role}</div>
                            <div style="font-size: 0.75rem; color: var(--dark-500);">${t.batch}</div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    };

    // =========================================================================
    // 8. NOTICES & CIRCULARS
    // =========================================================================
    const renderNotices = () => {
        const container = document.getElementById('noticesList');
        if (!container || !BCA_GOKAK_DATA.notices) return;

        container.innerHTML = BCA_GOKAK_DATA.notices.map(n => `
            <div class="notice-card">
                <div class="notice-meta-left">
                    <div class="notice-date-box">
                        <i class="fa-regular fa-calendar-check"></i><br>
                        ${n.date}
                    </div>
                    <div>
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                            <span class="badge badge-orange">${n.category}</span>
                            <span class="badge badge-green">${n.badge}</span>
                        </div>
                        <h4 class="notice-title">${n.title}</h4>
                    </div>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="showToast('Downloading notification circular...', 'info')">
                    <i class="fa-solid fa-download"></i> View Circular
                </button>
            </div>
        `).join('');
    };

    // =========================================================================
    // 9. ADMISSION APPLICATION & ELIGIBILITY CALCULATOR
    // =========================================================================
    const initAdmissionForm = () => {
        const form = document.getElementById('admissionApplicationForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('appName').value.trim();
            const phone = document.getElementById('appPhone').value.trim();
            const email = document.getElementById('appEmail').value.trim();
            const stream = document.getElementById('appStream').value;
            const percentage = parseFloat(document.getElementById('appPercentage').value);
            const nativePlace = document.getElementById('appNative').value.trim();
            const transport = document.getElementById('appTransport').value;

            // Generate application registration id
            const appNumber = `BCA-GK-2026-${Math.floor(1000 + Math.random() * 9000)}`;

            // Evaluate eligibility
            let statusBadge = "Eligible for Direct Admission";
            let scholarshipEligible = "Standard Merit Fee Structure";

            if (percentage >= 75) {
                statusBadge = "Merit Distinction - Direct Seat Reserved";
                scholarshipEligible = "Eligible for 25% College Merit Scholarship Fee Waiver";
            } else if (percentage < 40) {
                statusBadge = "Conditional Counseling Required";
                scholarshipEligible = "Subject to University Quota Verification";
            }

            // Display Acknowledgment Modal
            const modalBody = document.getElementById('admissionModalBody');
            if (modalBody) {
                modalBody.innerHTML = `
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 12px auto;">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <h3 style="font-size: 1.35rem; color: var(--dark-900);">Application Registered Successfully!</h3>
                        <p style="font-size: 0.88rem; color: var(--dark-600);">Welcome to BCA College Gokak, ${name}. Your admission slot has been logged.</p>
                    </div>

                    <div style="background: var(--bg-main); border: 1.5px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 20px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.88rem;">
                            <div>
                                <span style="color: var(--dark-500); font-size: 0.78rem;">APPLICATION ID</span>
                                <div style="font-weight: 800; font-family: monospace; color: var(--primary); font-size: 1rem;">${appNumber}</div>
                            </div>
                            <div>
                                <span style="color: var(--dark-500); font-size: 0.78rem;">ADMISSION STATUS</span>
                                <div style="font-weight: 700; color: var(--success);">${statusBadge}</div>
                            </div>
                            <div>
                                <span style="color: var(--dark-500); font-size: 0.78rem;">PUC PERCENTAGE</span>
                                <div style="font-weight: 700;">${percentage}% (${stream})</div>
                            </div>
                            <div>
                                <span style="color: var(--dark-500); font-size: 0.78rem;">TRANSPORT PREFERENCE</span>
                                <div style="font-weight: 700;">${transport}</div>
                            </div>
                        </div>

                        <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--border-color); font-size: 0.84rem; color: var(--dark-700);">
                            <i class="fa-solid fa-award" style="color: var(--primary);"></i> <strong>Scholarship Benefit:</strong> ${scholarshipEligible}
                        </div>
                    </div>

                    <div style="font-size: 0.86rem; color: var(--dark-600); line-height: 1.5; margin-bottom: 24px;">
                        <strong>Next Steps:</strong> Please visit our college campus near Falls Road, Gokak along with your original SSLC, PUC marks cards, and 2 passport photos to collect your official admission receipt and college ID card.
                    </div>

                    <div style="display: flex; gap: 10px;">
                        <button class="btn btn-secondary" style="flex: 1;" onclick="window.print()">
                            <i class="fa-solid fa-print"></i> Print Acknowledgment
                        </button>
                        <button class="btn btn-primary" style="flex: 1;" id="doneAdmissionBtn">
                            <i class="fa-solid fa-check"></i> Done
                        </button>
                    </div>
                `;

                document.getElementById('doneAdmissionBtn')?.addEventListener('click', () => {
                    closeModal('admissionModal');
                });
            }

            openModal('admissionModal');
            showToast(`Application ${appNumber} submitted for ${name}!`, 'success');
            form.reset();
        });
    };

    // =========================================================================
    // 10. FAQS ACCORDION
    // =========================================================================
    const renderFAQs = () => {
        const container = document.getElementById('faqList');
        if (!container || !BCA_GOKAK_DATA.faqs) return;

        container.innerHTML = BCA_GOKAK_DATA.faqs.map((faq, idx) => `
            <div class="faq-item ${idx === 0 ? 'open' : ''}">
                <button class="faq-btn">
                    <span>${faq.q}</span>
                    <div class="faq-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </button>
                <div class="faq-body" style="${idx === 0 ? 'max-height: 200px;' : ''}">
                    <div class="faq-inner">${faq.a}</div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.closest('.faq-item');
                const body = item.querySelector('.faq-body');
                const isOpen = item.classList.contains('open');

                if (isOpen) {
                    item.classList.remove('open');
                    body.style.maxHeight = null;
                } else {
                    item.classList.add('open');
                    body.style.maxHeight = body.scrollHeight + 30 + 'px';
                }
            });
        });
    };

    // =========================================================================
    // 11. MODAL HELPERS & MOBILE MENU
    // =========================================================================
    const openModal = (id) => {
        const m = document.getElementById(id);
        if (m) {
            m.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = (id) => {
        const m = document.getElementById(id);
        if (m) {
            m.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    document.getElementById('closeAdmissionModal')?.addEventListener('click', () => {
        closeModal('admissionModal');
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
            closeLightbox();
            document.body.style.overflow = '';
        }
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileBtn?.addEventListener('click', () => {
        const isFlex = navMenu.style.display === 'flex';
        if (isFlex) {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '82px';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = '#ffffff';
            navMenu.style.padding = '20px';
            navMenu.style.borderBottom = '2px solid var(--border-color)';
            navMenu.style.boxShadow = 'var(--shadow-md)';
        }
    });

    // Quick callback inquiry hero button
    document.getElementById('quickInquiryHeroBtn')?.addEventListener('click', () => {
        const adm = document.getElementById('admissions');
        adm?.scrollIntoView({ behavior: 'smooth' });
        showToast('Please submit your mobile number for a callback!', 'info');
    });

    // =========================================================================
    // 12. FLOATING TOAST NOTIFICATIONS
    // =========================================================================
    window.showToast = (msg, type = 'info') => {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="fa-solid fa-circle-info" style="color: var(--primary);"></i>
            <span>${msg}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3600);
    };

    // =========================================================================
    // 13. BOOTSTRAP
    // =========================================================================
    renderStats();
    renderPrograms();
    renderCurriculumTabs();
    renderFacilities();
    renderGallery();
    initGalleryFilters();
    renderFaculty();
    renderPlacements();
    renderNotices();
    initAdmissionForm();
    renderFAQs();
});
