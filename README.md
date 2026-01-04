# 🚀 Portfolio Moderno - Diego Porta

Portfolio personal modernizado con diseño innovador, efectos 3D y animaciones avanzadas.

## ✨ Características Nuevas

### 🎨 Diseño Moderno
- **Glassmorphism**: Efectos de vidrio esmerilado en tarjetas y elementos
- **Gradientes Vibrantes**: Paleta de colores moderna con gradientes dinámicos
- **Tipografía Moderna**: Fuentes Poppins y Space Grotesk para mejor legibilidad
- **Dark Mode**: Tema oscuro profesional con acentos de color

### 🌟 Efectos 3D con Three.js
- **Fondo Animado**: Partículas 3D flotantes que reaccionan al mouse
- **Cubos Flotantes**: Geometrías 3D con efectos glassmorphism
- **Movimiento Parallax**: Efecto de profundidad al hacer scroll
- **Iluminación Dinámica**: Luces de colores que realzan el efecto 3D

### 🎭 Animaciones Avanzadas
- **Animaciones de Entrada**: Efectos fade-in al hacer scroll
- **Efecto de Escritura**: Texto que se escribe automáticamente
- **Cursor Personalizado**: Cursor interactivo con seguimiento suave
- **Hover 3D**: Tarjetas con rotación 3D al pasar el mouse
- **Ripple Effects**: Ondas animadas en botones
- **Floating Elements**: Elementos flotantes con movimiento suave

### 📱 Secciones Mejoradas

#### Hero Section
- Diseño de dos columnas con presentación impactante
- Emoji animado con efecto de saludo
- Botones de acción con efectos hover
- Links sociales con animaciones
- Imagen de perfil con formas flotantes

#### About Section
- Layout moderno con imagen y texto
- Badge de experiencia animado
- Tarjetas de expertise interactivas
- Overlay con gradiente en la imagen

#### Skills Section
- Grid responsive de tecnologías
- Iconos con efecto hover
- Transición de escala de grises a color
- Bordes iluminados al hover

#### Projects Section
- Tarjetas 3D con efecto tilt
- Overlay con enlaces a GitHub y demo
- Tags de tecnologías
- Gradientes únicos para cada proyecto
- Descripciones detalladas

#### Contact Section
- Formulario moderno con validación
- Campos con efectos de focus
- Botón de descarga de CV
- Links sociales interactivos
- Sistema de notificaciones

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Grid, Flexbox, Animations, Variables CSS
- **JavaScript ES6+**: Clases, Arrow Functions, Async/Await
- **Three.js**: Gráficos 3D y animaciones
- **Font Awesome**: Iconos vectoriales
- **Google Fonts**: Poppins y Space Grotesk

## 📦 Archivos del Proyecto

```
Portfolio/
├── index.html              # Estructura HTML principal
├── Css/
│   └── style.css          # Estilos modernos con CSS3
├── Img/
│   ├── photo.png          # Foto de perfil
│   └── about.jpg          # Imagen About
├── head_click.js          # Menú móvil
├── 3d-background.js       # Fondo 3D con Three.js
└── animations.js          # Animaciones y efectos
```

## 🎯 Características Responsivas

- **Desktop**: Diseño de dos columnas con efectos completos
- **Tablet**: Adaptación a una columna manteniendo efectos
- **Mobile**: Optimizado para táctil con menú hamburguesa

### Breakpoints
- `1200px`: Cambio a layout de una columna
- `768px`: Menú mobile y ajustes de tipografía
- `480px`: Optimización para pantallas pequeñas

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
```bash
git clone [url-del-repositorio]
cd Portfolio
```

2. **Abrir en navegador**
- Simplemente abre `index.html` en tu navegador favorito
- Se recomienda usar un servidor local para mejor rendimiento:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server
```

3. **Personalizar**
- Edita `index.html` para cambiar contenido
- Modifica `Css/style.css` para ajustar colores y estilos
- Actualiza las imágenes en la carpeta `Img/`

## 🎨 Paleta de Colores

```css
--primary-color: #6366f1    /* Azul índigo */
--secondary-color: #8b5cf6  /* Púrpura */
--accent-color: #ec4899     /* Rosa */
--dark-bg: #0a0a0f          /* Fondo oscuro */
--text-primary: #ffffff     /* Texto principal */
--text-secondary: #a0a0b0   /* Texto secundario */
```

## ✨ Efectos Destacados

### 1. Fondo 3D Animado
- 1500 partículas flotantes
- 8 cubos 3D con iluminación
- Responde al movimiento del mouse
- Efecto parallax con scroll

### 2. Cursor Personalizado
- Cursor principal pequeño
- Follower con borde
- Efecto de mezcla de colores
- Oculto en dispositivos móviles

### 3. Tarjetas 3D
- Rotación basada en posición del mouse
- Transformación perspective 3D
- Smooth transitions
- Overlay con enlaces

### 4. Sistema de Notificaciones
- Notificaciones de éxito y error
- Animaciones de entrada/salida
- Auto-dismiss después de 3 segundos
- Diseño moderno con gradientes

## 🌐 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📈 Optimizaciones

- **Lazy Loading**: Carga diferida de imágenes
- **GPU Acceleration**: Uso de `transform` y `opacity`
- **Debouncing**: En eventos de scroll y resize
- **RequestAnimationFrame**: Para animaciones suaves
- **CSS Variables**: Para mejor mantenimiento

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `style.css`:

```css
:root {
    --primary-color: #tu-color;
    --secondary-color: #tu-color;
    /* ... más colores */
}
```

### Agregar Proyectos
Copia y modifica una tarjeta de proyecto en `index.html`:

```html
<div class="project-card" data-tilt>
    <!-- Tu proyecto aquí -->
</div>
```

### Modificar Animaciones
Ajusta los tiempos y efectos en `animations.js`:

```javascript
// Ejemplo: cambiar velocidad de escritura
setTimeout(typeWriter, 150); // Aumentar para más lento
```

## 📝 To-Do / Mejoras Futuras

- [ ] Modo claro/oscuro con toggle
- [ ] Más proyectos con capturas de pantalla
- [ ] Blog integrado
- [ ] Testimonios de clientes
- [ ] Integración con API de GitHub
- [ ] Analytics y tracking
- [ ] PWA support

## 👨‍💻 Autor

**Diego Alexander Porta Ñaña**
- 📧 Email: diegoporta20@hotmail.com
- 📱 Teléfono: +51 971486606
- 🌐 LinkedIn: [diego-alexander-porta-ñaña](https://www.linkedin.com/in/diego-alexander-porta-%C3%B1a%C3%B1a-5bb48b237/)
- 💻 GitHub: [@DiegoPorta20](https://github.com/DiegoPorta20)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar y modificar el código.

## 🙏 Agradecimientos

- Three.js por los gráficos 3D
- Font Awesome por los iconos
- Google Fonts por las tipografías
- La comunidad de desarrolladores web

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!

**Hecho con ❤️ y mucho ☕ por Diego Porta**
