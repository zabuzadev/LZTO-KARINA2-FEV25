import { Button } from "../../ui/button"
import { Input } from "../../ui/input";
import React, { useEffect, useState } from "react";


export default function Form() {
    // Adicionar estados para os campos do formulário
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  function validateForm(): boolean {
    if (fullname.trim() === '' || email.trim() === '') {
      alert('Preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  }

  useEffect(() => {

    const form = document.getElementById('form_1') as HTMLFormElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;

    const formatPhone = (value: string): string => {
      value = value.replace(/\D/g, '');
      value = value.substring(0, 11);

      if (value.length > 0) {
        value = '(' + value;
      }
      if (value.length > 2) {
        value = value.slice(0, 3) + ') ' + value.slice(3);
      }
      if (value.length > 8) {
        value = value.slice(0, 10) + '-' + value.slice(10);
      }

      return value;
    };

    const handlePhoneInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      target.value = formatPhone(target.value);
    };

    const handlePhoneKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === 'Backspace' || 'Delete') {
        const target = e.target as HTMLInputElement;
        target.value = target.value.replace(/\D/g, '');
      }
    };

    return () => {
    };
  }, [fullname, email]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const data = {
      submission_date: new Date().toISOString(),
      nome_formulario: 'funil_call_Protocolo-Madrid',
      'Página de Captura': window.location.pathname.replace(/^\/|\/$/g, ''),
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      utm_content: new URLSearchParams(window.location.search).get('utm_content') || '',
      utm_term: new URLSearchParams(window.location.search).get('utm_term') || '',
      fullname,
      email
    };


    fetch('https://n8n.aesmkt.com.br/webhook/karina-lzto-ener25', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Webhook disparado com sucesso:', result);
        window.location.href = 'https://www.terapiaefectiva.com/tksmapa';
      })
      .catch(error => {
        console.error('Erro ao disparar o webhook:', error);
      });
  }

  function formatPhone(value: string): string {
    value = value.replace(/\D/g, '');
    value = value.substring(0, 11);

    if (value.length > 0) {
      value = '(' + value;
    }
    if (value.length > 2) {
      value = value.slice(0, 3) + ') ' + value.slice(3);
    }
    if (value.length > 8) {
      value = value.slice(0, 10) + '-' + value.slice(10);
    }

    return value;
  }
    return(
        <form id="form_1" className="space-y-4" onSubmit={handleSubmit}>
              <Input
                id="fullname"
                type="text"
                placeholder="Tu Nombre"
                className="bg-blue-50 border-blue-300 h-12 active:bg-blue-100 hover:bg-blue-200"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <Input
                id="email"
                type="email"
                placeholder="Correo que más uses"
                className="bg-blue-50 border-blue-300 h-12"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="w-full  bg-karina-primary hover:bg-karina-primary/70 text-lg py-6 shadow-xl transition-all">
                ¡QUIERO REGISTRARME GRATIS!
              </Button>
            </form>
    )
}