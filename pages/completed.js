import style from '../styles/Plan.module.scss'
import Headerpage from '../componance/header.page'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player'

export default function completed() {
          return (
                    <div>
                              <div className={styles.container}>
                                        <Headerpage />
                              </div>

                              <div className={style.plans2}>
                                        <div className={style.planbox}>
                                                            <div className={style.planoptions}>
                                                                      <p className={style.mostpop}><p className={style.mostpoptext}>Confirmation</p></p>
                                                                      <div className={style.formbox}>
                                                                                <p className={style.p12}>Completed!</p>
                                                                                <p className={style.p21}>Congratulations! Invite your bot to your discord server by <br/> clicking the button below</p>
                                                                                <div className={style.vdocontaner}>
                                                                                <ReactPlayer url='https://www.youtube.com/watch?v=R7x2PDFOvi8' height={300} width={750} />
                                                                                </div>
                                                                                
                                                                                
                                                                      </div>
                                                                      
                                                                      <Link href="/"><button className={style.buttoninvitebot} type="submit" value="Submit" >Invite your bot</button></Link>
                                                            </div>
                                                  
                                        </div>
                                        
                              </div>
                              
                    </div>
          )
}