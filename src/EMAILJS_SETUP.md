# 📧 Guía de Configuración de EmailJS

Esta guía te ayudará a configurar EmailJS para que el formulario de contacto envíe emails automáticamente a `unidosinmigracion@gmail.com`.

## ✅ Plan Gratuito de EmailJS

EmailJS ofrece **200 emails/mes GRATIS** sin necesidad de tarjeta de crédito. Perfecto para tu bufete de abogados.

---

## 📝 Paso 1: Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Crea tu cuenta usando tu email de Google o cualquier otro email
4. Confirma tu email

---

## 🔧 Paso 2: Conectar tu Email (Gmail)

1. Una vez dentro del dashboard, ve a **"Email Services"** en el menú izquierdo
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Haz clic en **"Connect Account"**
5. Selecciona tu cuenta de Gmail `unidosinmigracion@gmail.com`
6. Autoriza el acceso
7. ¡Guarda el **Service ID** que aparece! (algo como `service_xxxxxxx`)

---

## 📋 Paso 3: Crear Template de Email

1. Ve a **"Email Templates"** en el menú izquierdo
2. Haz clic en **"Create New Template"**
3. Copia y pega este template:

### **Subject (Asunto del email):**
```
Nueva Consulta de {{from_name}} - {{subject}}
```

### **Content (Contenido del email):**
```
Has recibido una nueva consulta desde la página web.

INFORMACIÓN DEL CLIENTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Tipo de Caso: {{subject}}

MENSAJE:
━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado desde el formulario de contacto de Unidos Por Inmigración.
Responde directamente a {{from_email}} para continuar la conversación.
```

4. En **"Settings"** del template:
   - **From Name:** Unidos Por Inmigración
   - **From Email:** (se usará automáticamente tu email de Gmail)
   - **To Email:** unidosinmigracion@gmail.com

5. Haz clic en **"Save"**
6. ¡Guarda el **Template ID** que aparece! (algo como `template_xxxxxxx`)

---

## 🔑 Paso 4: Obtener tu Public Key

1. Ve a **"Account"** > **"General"** en el menú
2. Encontrarás tu **Public Key** (algo como `xxxxxxxxxxxxxxx`)
3. ¡Guárdalo!

---

## 💻 Paso 5: Actualizar el Código

Abre el archivo `/pages/Contact.tsx` y reemplaza estas 3 líneas:

```typescript
await emailjs.send(
  "YOUR_SERVICE_ID",     // 👈 Reemplaza con tu Service ID
  "YOUR_TEMPLATE_ID",    // 👈 Reemplaza con tu Template ID
  {
    from_name: formData.nombre,
    from_email: formData.email,
    phone: formData.telefono,
    subject: formData.asunto,
    message: formData.mensaje,
    to_email: "unidosinmigracion@gmail.com",
  },
  "YOUR_PUBLIC_KEY"      // 👈 Reemplaza con tu Public Key
);
```

### **Ejemplo con valores reales:**
```typescript
await emailjs.send(
  "service_abc1234",     // Tu Service ID
  "template_xyz5678",    // Tu Template ID
  {
    from_name: formData.nombre,
    from_email: formData.email,
    phone: formData.telefono,
    subject: formData.asunto,
    message: formData.mensaje,
    to_email: "unidosinmigracion@gmail.com",
  },
  "Kj8xPqR_LmN9WvT"     // Tu Public Key
);
```

---

## 🧪 Paso 6: Probar el Formulario

1. Ve a la página de **Contacto** en tu sitio web
2. Completa el formulario con datos de prueba
3. Haz clic en **"Enviar Consulta"**
4. Si todo está bien, verás el mensaje: "¡Gracias por contactarnos! Hemos recibido tu mensaje..."
5. Revisa el inbox de `unidosinmigracion@gmail.com` - ¡deberías tener un email!

---

## ⚠️ Solución de Problemas

### **Error: "Service ID is invalid"**
- Verifica que copiaste correctamente el Service ID desde EmailJS
- Asegúrate de que el servicio de Gmail esté activo

### **Error: "Template ID is invalid"**
- Verifica que copiaste correctamente el Template ID
- Asegúrate de haber guardado el template

### **Error: "Public Key is invalid"**
- Verifica tu Public Key en Account > General
- Asegúrate de no incluir espacios extra al copiar

### **No llegan los emails**
- Revisa la carpeta de SPAM en Gmail
- Verifica que la dirección `unidosinmigracion@gmail.com` esté configurada en el template
- Ve al dashboard de EmailJS > "Logs" para ver si los emails se enviaron

---

## 📊 Monitorear Emails Enviados

En el dashboard de EmailJS:
1. Ve a **"Logs"** en el menú izquierdo
2. Aquí puedes ver todos los emails enviados
3. Si un email falla, verás el error aquí

---

## 🎉 ¡Listo!

Tu formulario de contacto ahora está 100% funcional. Cada vez que alguien complete el formulario:

✅ Recibirás un email en `unidosinmigracion@gmail.com`  
✅ El email incluye toda la información del cliente  
✅ Puedes responder directamente desde Gmail  
✅ El cliente ve un mensaje de confirmación  

---

## 💡 Consejos Adicionales

- **Límite gratuito:** 200 emails/mes es suficiente para la mayoría de bufetes pequeños
- **Notificaciones:** Configura Gmail para recibir notificaciones push en tu celular
- **Respuesta automática:** Puedes crear un segundo template en EmailJS para enviar un email de confirmación automático al cliente
- **Upgrade:** Si necesitas más de 200 emails/mes, EmailJS ofrece planes desde $7/mes

---

## 📞 Contacto de Soporte

Si tienes problemas con la configuración:
- **EmailJS Support:** https://www.emailjs.com/docs/
- **EmailJS Discord:** https://discord.com/invite/VZc4JkyrYZ

---

**¡Tu formulario de contacto está listo para recibir clientes! 🚀**
