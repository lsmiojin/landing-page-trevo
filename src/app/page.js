'use client'
import Image from "next/image";
import styles from "./page.module.css";
import logo from '../../public/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faFile } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const rota = useRouter()
  return (
    <main className={styles.main} >
      <div style={{padding:'20px', display:'flex', alignItems:'center', justifyContent:"center", marginTop:'48px'}} >
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.texto_principal} >
        <p>Não escalamos montanhas para nos exibirmos para o mundo, escalamos montanhas para contemplarmos o mundo com nossos próprios olhos.</p>
      </div>

      <div className={styles.div_btns} >
        <h2>Conheça nossas soluções</h2>

        <div className={styles.div_btns_btns} >
          <div>
            <p><FontAwesomeIcon icon={faBagShopping} height={20}  /> Sistema online completo para lojas de moda</p>
            <button onClick={() => rota.push('https://site.trevo.dev.br')} >Quero conhecer!</button>
          </div>

          <div>
            <p><FontAwesomeIcon icon={faFile} height={20} /> Armazenamento de documentos fiscais emitidos pela sua empresa</p>
            <button onClick={() => rota.push('https://guardiaotrevo-git-main-trevo.vercel.app/login')} >Acesse agora!</button>
          </div>
        </div>
      </div>
      
    </main>
  );
}
