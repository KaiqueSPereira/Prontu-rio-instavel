import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #afe7ee;
    overflow-x: hidden;
}

.icon {
    width: 20px;
    height: 20px;
}

.header {
    background: #000;
    min-height: 80px;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 40px; /* Espaçamento interno para ajustar o menu */
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header h1 {
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
}

.logo {
    height: 64px;
}

.container-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    background-color: #fff;
    border-radius: 100px;
    overflow: hidden;
    padding-right: 24px;
}

.container-search input {
    border-radius: 100px;
    flex: 1;
    border: none;
    padding: 16px 24px;
}

.container-search input:focus {
    outline: none;
}

.container-menu {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 8px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.container-menu:hover {
    transform: scale(1.04);
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 6px;
    text-decoration: none;
    color: #000;
}

.menu-item:hover {
    background-color: #777575;
}

.menu-item p {
    font-weight: 700;
    font-size: 14px;
    margin-left: 12px;
}

.perfil {
    width: 32px;
    height: 32px;
    margin-left: 12px;
    border-radius: 100px;
}

/* MENU */

.popover__wrapper {
    position: relative;
    display: inline-block;
}

.popover__content {
    opacity: 0;
    top: 64px;
    visibility: hidden;
    position: absolute;
    transform: translate(0, 20px);
    background-color: #fff;
    padding: 8px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    width: auto;
    border-radius: 6px;
}

.popover__content:before {
    position: absolute;
    border-radius: 6px;
    z-index: -1;
    content: "";
    right: 0;
    top: -6px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #fff transparent;
    transition-duration: 0.3s;
    transition-property: transform;
}

.popover__wrapper:hover .popover__content {
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transform: translate(-150px, -16px);
    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}

.controlusers {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 50px;
    text-decoration: none;
    color: white;
}

.controlusers:hover {
    background-color: white;
    color: #000;
}

.custom-file-input input[type="file"] {
    display: none;
}

.custom-file-input button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007bff; /* Cor do botão */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.custom-file-input button img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.custom-file-input button:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
}

#file-names {
    margin-top: 10px;
    font-size: 14px;
    color: #555;
}

.file-name {
    display: block;
    margin-top: 5px;
}
`;

export default Global;
