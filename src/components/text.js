import React, { useState, useEffect } from 'react';

function TypingText() {
    const fullText = 'WELLFINE';
    const [text, setText] = useState('');

    useEffect(() => {
        let index = 0;
        setTimeout(() => {
            const intervalId = setInterval(() => {
            if (index < fullText.length) {
                if(index > 0 && fullText[index-1] != text[index-1]){
                    setText((prevText) => prevText + fullText[index-1]);
                    index++;
                }
                else{
                    setText((prevText) => prevText + fullText[index]);
                    index++;
                }
            } else {
                clearInterval(intervalId);
            }
        }, 100);}, 1000)
         // скорость печати
    }, []);

    return <>{text}</>;
}

export default TypingText;