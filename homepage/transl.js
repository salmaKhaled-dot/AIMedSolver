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
            "section1-text":
                "Beginning of the healing For the first time, the right responses Having the correct diagnosis is essential for effective treatment. The most difficult medical problems are diagnosed and treated by our medical professionals.<br>",
            "section1-imp": "For the first time Ai med Clinic in Egypt",
            "section2-imp": "Ai diagnostic analyzer <br>",
            "section2-text":
                "With the use of this AI diagnostic analyzer, doctors can quickly and accurately diagnose clients. Additionally, it gives users the option to input their symptoms and get a real-time diagnosis, allowing them to take control of their health without waiting for a doctor's evaluation.",
            toolsHeader: "Tools, Trackers & Calculators",
            "bmi-title": "BMI Calculator",
            "ovulation-title": "Ovulation Calculator",
            "pregnancy-title": "Pregnancy Calendar",
            "thyroid-title": "Thyroid Function",
            "bloodCount-title": "Complete Blood Count",
            "findDoctor-text": "Find a doctor",
            "aiDiagnose-text": "Ai Diagnose",
            "warning-text": "Warning",
            "nearYou-text": "Near you",
            "home-link": "Home",
            "findDoctor-link": "Find a doctor",
            "aiDiagnose-link": "AI Diagnose",
            "warning-link": "Warning",
            "nearYou-link": "Near you",
            "followUs-header": "Follow Us",
            "news-header": "News",
            "aboutUs-header": "About Us",
            "findDoctor-button": "FIND A DOCTOR",
            "aiDiagnose-button": "AI DIAGNOSE",
            "warning-button": "WARNING",
            "nearYou-button": "NEAR YOU",
            login: "LOGIN",
            signup: "SIGN UP",
            "scheduleAppt-text": "Schedule an appointment",
            "findChart-text": "Find your Chart",
        },
        "ar-EG": {
            "tagline-text": "نحن نهتم بك",
            "section1-text":
                "بداية الشفاء للمرة الأولى ، الردود الصحيحة أن يكون التشخيص الصحيح أمرًا ضروريًا للعلاج الفعال. يتم تشخيص وعلاج أصعب المشاكل الطبية بواسطة متخصصينا الطبيين.",
            "section1-imp":
                "للمرة الأولى عيادة طبية باستخدام الذكاء الاصطناعي في مصر",
            "section2-imp": "محلل تشخيصي بالذكاء الاصطناعي ",
            "section2-text":
                "باستخدام هذا المحلل التشخيصي الذكي بالذكاء الاصطناعي ، يمكن للأطباء تشخيص العملاء بسرعة وبدقة. بالإضافة إلى ذلك ، يتيح للمستخدمين إمكانية إدخال أعراضهم والحصول على تشخيص فوري ، مما يسمح لهم بالسيطرة على صحتهم دون الانتظار لتقييم الطبيب.",
            toolsHeader: "أدوات، متتبعات وحاسبات",
            "bmi-title": "حاسبة مؤشر كتلة الجسم",
            "ovulation-title": "حاسبة التبويض",
            "pregnancy-title": "تقويم الحمل",
            "thyroid-title": "وظيفة الغدة الدرقية",
            "bloodCount-title": "عدد كريات الدم الكامل",
            "findDoctor-text": "البحث عن طبيب",
            "aiDiagnose-text": "التشخيص بالذكاء الاصطناعي",
            "warning-text": "الطوارئ",
            "nearYou-text": "بالقرب منك",
            "home-link": "الصفحة الرئيسية",
            "findDoctor-link": "البحث عن طبيب",
            "aiDiagnose-link": "التشخيص بالذكاء الاصطناعي",
            "warning-link": "الطوارئ",
            "nearYou-link": "بالقرب منك",
            "followUs-header": "تابعنا",
            "news-header": "الأخبار",
            "aboutUs-header": "من نحن",
            "findDoctor-button": "البحث عن طبيب",
            "aiDiagnose-button": "التشخيص بالذكاء الاصطناعي",
            "warning-button": "الطوارئ",
            "nearYou-button": "بالقرب منك",
            login: "تسجيل الدخول",
            signup: "انشاء حساب",
            "scheduleAppt-text": "حجز موعد",
            "findChart-text": "العثور علي جدولك",
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
