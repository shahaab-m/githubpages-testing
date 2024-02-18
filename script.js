// Data array containing problem details
var problems = [
    {
        problem: "Problem #1",
        title: "🔮 Quantam craft: Engineer the extraordinary",
        explanation: "As an engineer, you've likely encountered tools such as Google Analytics, HubSpot, Mixpanel, Adobe Analytics, and others. But have you ever pondered the inner workings of those JavaScript libraries that seamlessly transmit data from the browser to backend APIs in a secure manner?",
        additionalExplanation: `Design an authentication mechanism tailored for frontend JavaScript libraries, enabling secure API calls to backend servers. The goal? Ensuring data integrity while fortifying API security against potential manipulation. The backend server must possess the ability to identify and reject any API calls originating from malicious sources.
        Picture this: the JavaScript libraries are embedded within your customer's website, boasting a handful of configurable parameters, for ex: Measurement ID/Google Tag ID that Google Analytics uses or tokens that Mixpanel uses and so on. Your challenge? Crafting a robust authentication solution that seamlessly integrates with these libraries, safeguarding the integrity of transmitted payloads while thwarting nefarious actors.`
    },
    {
        problem: "Problem #2",
        title: "🧙🏻‍♂️ TechMystique: Cracking the Code of Ingenuity!",
        explanation: "As an engineer, you've likely encountered tools such as Google Analytics, HubSpot, Mixpanel, Adobe Analytics, and others. But have you ever pondered the inner workings of those JavaScript libraries that seamlessly transmit data from the browser to backend APIs in a secure manner?",
        additionalExplanation: `Develop an authentication mechanism enabling frontend JavaScript libraries to execute authenticated API calls to backend servers, ensuring payload integrity and API security. The mechanism should thwart manipulation attempts and block API calls originating from malicious users.
        These JavaScript libraries will be integrated into your customer's website, with configurable parameters, for ex: Measurement ID/Google Tag ID that Google Analytics uses or tokens that Mixpanel uses and so on.`
    }
];

function openModal(index) {
    var modal = document.getElementById("modal");
    var modalProblem = document.getElementById("modal-problem");
    var modalTitle = document.getElementById("modal-title");
    var modalExplanation = document.getElementById("modal-explanation");
    var modalAdditionalExplanation = document.getElementById("modal-additional-explanation");

    modalProblem.textContent = problems[index].problem;
    modalTitle.textContent = problems[index].title;
    modalExplanation.textContent = problems[index].explanation;
    modalAdditionalExplanation.textContent = problems[index].additionalExplanation;

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
