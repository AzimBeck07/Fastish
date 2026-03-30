// script.js

// Shift Management Functionality
class Shift {
    constructor(employeeId, startTime, endTime) {
        this.employeeId = employeeId;
        this.startTime = new Date(startTime);
        this.endTime = new Date(endTime);
    }

    getDuration() {
        return (this.endTime - this.startTime) / (1000 * 60 * 60); // duration in hours
    }
}

class ShiftManager {
    constructor() {
        this.shifts = [];
    }

    addShift(shift) {
        this.shifts.push(shift);
    }

    getTotalHours(employeeId) {
        return this.shifts
            .filter(shift => shift.employeeId === employeeId)
            .reduce((total, shift) => total + shift.getDuration(), 0);
    }
}

// Payment Functionality
class Payment {
    constructor(employeeId, amount, date) {
        this.employeeId = employeeId;
        this.amount = amount;
        this.date = new Date(date);
    }
}

class PaymentManager {
    constructor() {
        this.payments = [];
    }

    addPayment(payment) {
        this.payments.push(payment);
    }

    getTotalPayments(employeeId) {
        return this.payments
            .filter(payment => payment.employeeId === employeeId)
            .reduce((total, payment) => total + payment.amount, 0);
    }
}

// Job Application Functionality
class JobApplication {
    constructor(applicantId, position, status, applicationDate) {
        this.applicantId = applicantId;
        this.position = position;
        this.status = status;
        this.applicationDate = new Date(applicationDate);
    }
}

class JobApplicationManager {
    constructor() {
        this.applications = [];
    }

    addApplication(application) {
        this.applications.push(application);
    }

    getApplicationsByStatus(status) {
        return this.applications.filter(app => app.status === status);
    }
}

// Telegram WebApp Integration
function sendTelegramMessage(chatId, message) {
    const token = 'YOUR_TELEGRAM_BOT_TOKEN';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    })
    .then(response => response.json())
    .then(data => console.log('Message sent:', data))
    .catch(error => console.error('Error:', error));
}

// Example usage
const shiftManager = new ShiftManager();
const paymentManager = new PaymentManager();
const applicationManager = new JobApplicationManager();
