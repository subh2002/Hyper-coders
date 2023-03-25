function updateDeliveryStep(stepNumber) {
    const deliverySteps = document.querySelectorAll('.delivery-step');

    deliverySteps.forEach((step, index) => {
        const icon = step.querySelector('.order');
        const button = step.querySelector('.selectsionz');

        if (index < stepNumber) {
            icon.classList.add('active');
            button.disabled = true;
        } else if (index === stepNumber) {
            icon.classList.add('active', 'current');
            button.disabled = false;
        } else {
            icon.classList.remove('active', 'current');
            button.disabled = true;
        }
    });
}

// Example usage:
// To update the delivery status to halfway
updateDeliveryStep(2);
