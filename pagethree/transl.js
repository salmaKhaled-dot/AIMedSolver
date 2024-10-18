const locales = ["en-GB", "ar-EG"];

function getFlagSrc(countryCode) {
    return /^[A-Z]{2}$/.test(countryCode)
        ? `https://www.countryflagicons.com/SHINY/64/${countryCode.toUpperCase()}.png`
        : "";
}

function translatePage(language) {
    const isArabic = language === "ar-EG";

    const translations = {
        "en-GB": {
            "tagline-text": "We care about you",
            "home-link": "Home",
            "findDoctor-link": "Find a doctor",
            "aiDiagnose-link": "AI Diagnose",
            "warning-link": "Warning",
            "nearYou-link": "Near you",
            "tabOne-text": "Find a Doctor",
            "tabTwo-text": "Near Hospitals and Pharmacy",
            "tabThree-text": "Appointment",
            "tabFour-text": "Warning",
            "medicalSpecialty-text": "Medical specialty?",
            "onlineOrNearYou-text": "Online or near you",
            "online-text": "Online",
            "nearYou-text": "Near You",
            "showResult-button": "Show the result",
            "clinicOrPharmacy-text": "Clinic or Pharmacy",
            "clinic-option": "Clinic",
            "pharmacy-option": "Pharmacy",
            "specialty-text": "What specialty are you looking for?",
            "cardiology-option": "Cardiology",
            "dermatology-option": "Dermatology",
            "endocrinology-option": "Endocrinology",
            "gastroenterology-option": "Gastroenterology",
            "neurology-option": "Neurology",
            "oncology-option": "Oncology",
            "pediatrics-option": "Pediatrics",
            "psychiatry-option": "Psychiatry",
            "radiology-option": "Radiology",
            "surgery-option": "Surgery",
            "kindAppointment-text":
                "What kind of appointment are you scheduling?",
            "physical-option": "Physical",
            "virtual-option": "Virtual",
            "chooseDoctor-heading": "Choose Doctor",
            "calendar-heading": "Calendar",
            "bookAppointment-button": "Book an appointment",
            "smartwatchQuestion-text": "Do you have a smartwatch?",
            "yes-label": "Yes",
            "no-label": "No",
            "warnSign-text": "You can send warn sign if you are in danger",
            "warning-button": "Warning",
            "downloadApp-button":
                "Download our app and connect your smartwatch",
            "lifesaver-text1": "Be a Lifesaver",
            "lifesaver-text2": " Donate Blood and Make a Difference Today!",
            "donateCheckup-text": "Donate and take a free checkup :)",
            "news-heading": "News",
            "followUs-heading": "Follow Us",
            "news-section": "News",
            "aboutUs-section": "About Us",
            "tabOne-heading": "Looking For",
            "tabOne-heading": "Looking For",
            finddoctor: "FIND A DOCTOR",
            aidiagnose: "AI DIAGNOSE",
            Warning: "WARNING",
            nearyou: "NEAR YOU",
            "tabOne-heading2": "Find Doctors and Dentists Near You",
            search: "Search doctores",
            "search-paragraph":
                "You can also search by physician, practice, or hospital name",
            "bu-text": "Book an appointment",
        },
        "ar-EG": {
            "tagline-text": "نحن نهتم بك",
            "home-link": "الرئيسية",
            "findDoctor-link": "البحث عن طبيب",
            "aiDiagnose-link": "التشخيص بالذكاء الاصطناعي",
            "warning-link": "الطوارئ",
            "nearYou-link": "بالقرب منك",
            "tabOne-text": "البحث عن طبيب",
            "tabTwo-text": "المستشفيات والصيدليات بالقرب منك",
            "tabThree-text": "حجز موعد",
            "tabFour-text": "الطوارئ",
            "medicalSpecialty-text": "تخصص طبي؟",
            "onlineOrNearYou-text": "عبر الإنترنت أو قريب منك",
            "online-text": "عبر الإنترنت",
            "nearYou-text": "قريب منك",
            "showResult-button": "عرض النتيجة",
            "clinicOrPharmacy-text": "عيادة أو صيدلية",
            "clinic-option": "عيادة",
            "pharmacy-option": "صيدلية",
            "specialty-text": "ما هو التخصص الذي تبحث عنه؟",
            "cardiology-option": "القلبية",
            "dermatology-option": "الجلدية",
            "endocrinology-option": "الغدد الصماء",
            "gastroenterology-option": "الجهاز الهضمي",
            "neurology-option": "الأعصاب",
            "oncology-option": "الأورام",
            "pediatrics-option": "طب الأطفال",
            "psychiatry-option": "الطب النفسي",
            "radiology-option": "الأشعة",
            "surgery-option": "الجراحة",
            "kindAppointment-text": "ما نوع الموعد الذي تريد حجزه؟",
            "physical-option": "حضوري",
            "virtual-option": "افتراضي",
            "chooseDoctor-heading": "اختيار الطبيب",
            "calendar-heading": "التقويم",
            "bookAppointment-button": "حجز موعد",
            "smartwatchQuestion-text": "هل لديك ساعة ذكية؟",
            "yes-label": "نعم",
            "no-label": "لا",
            "warnSign-text": "يمكنك إرسال إشارة تحذير إذا كنت في خطر",
            "warning-button": "تحذير",
            "downloadApp-button":
                "قم بتحميل التطبيق وقم بتوصيل الساعة الذكية الخاصة بك",
            "lifesaver-text1": "كن منقذًا",
            "lifesaver-text2": "تبرع بالدم واصنع فرقًا اليوم !",
            "donateCheckup-text": "تبرع واحصل على فحص مجاني :)",
            "news-heading": "أخبار",
            "followUs-heading": "تابعنا",
            "news-section": "أخبار",
            "aboutUs-section": "من نحن",
            "tabOne-heading": "بحث عن",
            "tabTwo-heading": "بحث عن",
            finddoctor: "البحث عن طبيب",
            aidiagnose: "التشخيص بالذكاء الاصطناعي",
            Warning: "الطوارئ",
            nearyou: "بالقرب منك",
            "tabOne-heading2": "البحث عن أطباء بالقرب منك",
            search: "البحث عن الاطباء",
            "search-paragraph":
                "يمكنك أيضًا البحث باسم الطبيب أو الممارسة أو المستشفى",
            "bu-text": "احجز الان",
        },
    };

    for (const key in translations[language]) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[language][key];
            if (isArabic) {
                element.classList.add("arabic-style");
            } else {
                element.classList.remove("arabic-style");
            }
        }
    }

    const buttonsElement = document.querySelector(".buttons");
    if (isArabic) {
        buttonsElement.classList.add("arabic-buttons");
    } else {
        buttonsElement.classList.remove("arabic-buttons");
    }
    function updateImageWrapperFlexDirection() {
        const boxDonate = document.querySelector(".box-donate");
        const imageWrapper = boxDonate.querySelector(".image-wrapper");
        if (isArabic) {
            imageWrapper.style.flexDirection = "row";
        } else {
            imageWrapper.style.flexDirection = "row-reverse";
        }
    }

    updateImageWrapperFlexDirection();

    document.addEventListener("DOMContentLoaded", function () {
        document.addEventListener(
            "langchange",
            updateImageWrapperFlexDirection
        );
    });
}

function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = new Intl.DisplayNames([locale], {
        type: "language",
    }).of(intlLocale.language);

    const dropdownBtn = document.getElementById("dropdown-btn");
    dropdownBtn.innerHTML = `<img src="${getFlagSrc(
        intlLocale.region
    )}" /> ${langName}`;

    translatePage(locale);
}

function handleLanguageSelection() {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownContent = document.getElementById("dropdown-content");
    let isDropdownOpen = false;

    dropdownBtn.addEventListener("click", function () {
        if (isDropdownOpen) {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
        isDropdownOpen = !isDropdownOpen;
    });

    locales.forEach((locale) => {
        const intlLocale = new Intl.Locale(locale);
        const langName = new Intl.DisplayNames([locale], {
            type: "language",
        }).of(intlLocale.language);

        const listEl = document.createElement("li");
        listEl.innerHTML = `<img src="${getFlagSrc(
            intlLocale.region
        )}" /> ${langName}`;

        listEl.addEventListener("click", function () {
            setSelectedLocale(locale);
            dropdownContent.style.display = "none";
            isDropdownOpen = false;
        });

        dropdownContent.appendChild(listEl);
    });
}

handleLanguageSelection();
setSelectedLocale(locales[0]);
