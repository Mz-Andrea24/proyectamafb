document.head.innerHTML +=
`<style>
    mi-nav nav a{text-decoration:none;
          color:inherit;
          font-size:14px;} 
    mi-nav nav li{display:inline-block;
            width:15%;
            padding:5px 10px;
            background-color:#000;
            border:1px solid #000;
            text-align:center;
            color:#fff;}
    mi-nav nav li:hover{
            background-color:#fff;
            color:#000;}           
</style>`;

customElements.define("mi-nav", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav><ul>
                            <li><a class="btn btn-link" href="index.html">Estilos</a></li>
                            <li><a class="btn btn-link" href="encuesta.html">Encuesta</a></li>
                         </ul></nav>`
    }
});