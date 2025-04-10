const FIELDS = {
  'name-input': {
    pattern: /^[A-Za-zА-Яа-яЁё\s]+$/,
    errorMessage: 'Только буквы русского/английского языка и пробелы'
  },
  'tel-input': {
    pattern: /^[0-9]+$/,
    errorMessage: 'Только цифры без пробелов'
  }
};

const initFormValidation = () => {
  const form = document.querySelector('.form');
  if (!form) {
    return;
  }

  const createErrorElement = (input, message) => {
    let errorElement = input.parentNode.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'error-message';
      errorElement.style.color = '#ff121f';
      errorElement.style.fontSize = '12px';
      errorElement.style.display = 'none';
      input.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
    return errorElement;
  };

  Object.keys(FIELDS).forEach((name) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) {
      return;
    }

    const { pattern, errorMessage } = FIELDS[name];
    const errorElement = createErrorElement(input, errorMessage);

    input.removeAttribute('pattern');

    input.addEventListener('input', () => {
      const isValid = pattern.test(input.value);
      if (input.value && !isValid) {
        input.classList.add('invalid');
        errorElement.style.display = 'block';
      } else {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
      }
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        errorElement.style.display = 'none';
      }
    });
  });

  form.addEventListener('submit', (evt) => {
    let isFormValid = true;
    Object.keys(FIELDS).forEach((name) => {
      const input = form.querySelector(`[name="${name}"]`);
      const { pattern } = FIELDS[name];
      const isValid = pattern.test(input.value);
      const errorElement = input.parentNode.querySelector('.error-message');

      if (input.value && !isValid) {
        input.classList.add('invalid');
        errorElement.style.display = 'block';
        isFormValid = false;
      } else {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
      }
    });

    if (!isFormValid) {
      evt.preventDefault();
    }
  });
};

document.addEventListener('DOMContentLoaded', initFormValidation);
export { initFormValidation };
