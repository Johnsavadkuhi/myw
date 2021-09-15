
import React from 'react';

import { useTranslation } from 'react-i18next';

function TestLang () {
  const { t , i18n} = useTranslation();

  const handleChangeEn = ()=>{
      const dir =i18n.dir("en")
      console.log("dir english : ", dir )
      i18n.changeLanguage("en")
      console.log("changed....")
  }
  const handleChangeFa = ()=>{
    const dir = i18n.dir("fa")
    console.log("dir : " , dir )
    i18n.changeLanguage("fa")
    console.log("changed....")
}
  return<>
  
   <h1 style={{color:"rgb(112, 76, 182)"}}>{t('title')}</h1>
   <p></p>
   <p>{t('description.part1')}</p>

   <button onClick={handleChangeEn}>To English</button>
   <button onClick={handleChangeFa}>To Farsi</button>

   </>
}

export default TestLang ;
