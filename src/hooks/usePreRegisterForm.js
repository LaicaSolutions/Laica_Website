import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { salvarPreCadastro } from '../../services/preCadastroService';

const usePreRegisterForm = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
    whatsappConsent: false
  });

  const [status, setStatus] = useState('');
  const [formError, setFormError] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
      value = value.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
    }
    setPhone(value);
    setError('');
  };

  const validateName = () => {
    if (!formData.name.trim()) {
      setNameError('Nome é obrigatório');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = () => {
    if (!formData.email) {
      setEmailError('Email é obrigatório');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Formato de e-mail inválido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePhone = () => {
    const isValid = /^\(\d{2}\)\s\d{5}-\d{4}$/.test(phone);
    if (!isValid) {
      setError('Número de telefone inválido. Use o formato (99) 99999-9999');
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidName = validateName();
    const isValidPhone = validatePhone();
    const isValidEmail = validateEmail();

    if (!isValidName || !isValidPhone || !isValidEmail) return;

    setStatus('Salvando...');
    setFormError('');

    try {
      await salvarPreCadastro({
        ...formData,
        cellphone: phone,
        whatsappConsent: !!formData.whatsappConsent,
      });

      setStatus('Cadastro salvo com sucesso!');
      navigate('/conexao');
    } catch (error) {
      console.error('Erro ao salvar pré-cadastro:', error);
      setFormError(error.message || 'Erro ao salvar cadastro.');
      setStatus('');
    }
  };

  return {
    formData,
    phone,
    error,
    emailError,
    nameError,
    formError,
    handleChange,
    handlePhoneChange,
    validateName,
    validateEmail,
    validatePhone,
    handleSubmit,
    formRef
  };
};

export default usePreRegisterForm;
