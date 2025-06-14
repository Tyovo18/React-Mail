import React, {useEffect} from 'react';
import JSZip from 'jszip';
import {saveAs} from 'file-saver';

import './Archive.css';
import {Images} from './stories/Images';

export const Archive = () => {
    const getBase64Image = (img) => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width*2;
        canvas.height = img.height*2;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    const generateArchive = () => {
        const zip = new JSZip();
        const folder = zip.folder("images");

        const images = document.querySelectorAll('img');

        Object.values(images).map(async (img) => {
            if (img.classList.contains('for_archive')) {
                img.style.display = 'block';
            }

            const base64_img = getBase64Image(img);

            const filename = img.src.split('http://localhost:3000/static/media/')[1];

            img.dataset.oldSrc = img.src;
            img.src = 'images/' + filename;

            folder.file(filename, base64_img, {base64: true})

            if (img.classList.contains('for_archive')) {
                img.closest('td').remove();
            }
        });

        Object.values(document.querySelectorAll('.button--generate, noscript')).map(item => item.remove());


        zip.file("index.html", document.documentElement.innerHTML.replace('/static/media', 'images'));


        Object.values(images).map(async img => {
            img.src = img.dataset.oldSrc;
        });

        zip.generateAsync({type: 'blob'}).then(function(content) {
            saveAs(content, 'edm8.zip');
        });
    };

    const svg = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="25" fill="black"/>
        <path d="M18 33H32" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M24.4343 29.5657C24.7467 29.8781 25.2533 29.8781 25.5657 29.5657L30.6569 24.4745C30.9693 24.1621 30.9693 23.6556 30.6569 23.3431C30.3444 23.0307 29.8379 23.0307 29.5255 23.3431L25 27.8686L20.4745 23.3431C20.1621 23.0307 19.6556 23.0307 19.3431 23.3431C19.0307 23.6556 19.0307 24.1621 19.3431 24.4745L24.4343 29.5657ZM25.8 17C25.8 16.5582 25.4418 16.2 25 16.2C24.5582 16.2 24.2 16.5582 24.2 17H25.8ZM25.8 29L25.8 17H24.2L24.2 29H25.8Z" fill="white"/>
        </svg>
    `;
    return (
        <button className={'button--generate'} id={'new_archive'} onClick={() => generateArchive()} dangerouslySetInnerHTML={{__html: svg}}></button>
    )
}

export default Archive;