// components/Hexagon.tsx
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Hexagon.module.css';

interface HexagonProps {
    imageUrl: string;
    contentColor: string;
    hexData: Array<{ img_url: string; color: string }>
}

const Hexagon: React.FC<HexagonProps> = ({ imageUrl, contentColor, hexData }) => {

    const [animationState, setAnimationState] = useState<"fadeIn" | "fadeOut">("fadeIn");

    const [data, setData] = useState<Array<{ img_url: string; color: string }>>(hexData);

    const [currentItem, setCurrentItem] = useState<{ img_url: string; color: string }>({ img_url: imageUrl, color: contentColor })

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationState('fadeOut');

            setTimeout(() => {
                // Randomly select an object from the array
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomObject = data[randomIndex];
                console.log(randomObject)
                setCurrentItem(randomObject)

                // Update imageUrl and contentColor based on the selected object
                setAnimationState('fadeIn');
                setData(data => data.map((item, index) => (index === randomIndex ? randomObject : item)));
            }, 1500)
        }, Math.random() * 20000 + 10);

        return () => clearTimeout(timer);
    }, [data]);

    return (
        // <div className={styles.hexagon} style={{ backgroundColor: contentColor }}>
        <div className={`${styles.hexagon} ${styles[animationState]}`} style={{ backgroundColor: currentItem.color }}>
            <img src={currentItem.img_url} alt="Hexagon Image" className={styles.hexagonImage} />
        </div>
    );
};

export default Hexagon;
