import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

function Vision2() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '60px'
      }}
    >
      <img
        style={{
          width: '200px',
          position: 'relative',
          left: '90px'
          
        }}
        src="https://media.discordapp.net/attachments/1331191768959418478/1335554147105378374/Screenshot_2-2-2025_131442_www.vecteezy.com.jpeg?ex=67a0973a&is=679f45ba&hm=52f79efdbd627a5e4c4c53596d04fcdfc872e393f9d5ed2f2d2d288693dbb7a2&=&format=webp&width=374&height=312"
        alt="Vision"
      />
      <h1
        style={{
          textAlign: 'center',
          color: '#ec7a1e',
          position: 'relative',
          top: '20px',
                 left: '50px'
        }}
      >
        {t('vision.title')}
      </h1>

      <motion.p
        className="text-vision"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        style={{ color: 'black', textAlign: 'center' ,   position: 'relative',
          top: '20px',
                 left: '50px'}}
        dangerouslySetInnerHTML={{ __html: t('vision.description1') }}
      />

      <motion.p
        className="text-vision"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
        style={{ color: 'black', textAlign: 'center',    position: 'relative',
          top: '20px',
                 left: '50px' }}
        dangerouslySetInnerHTML={{ __html: t('vision.description2') }}
      />
    </div>
  );
}

export default Vision2;
