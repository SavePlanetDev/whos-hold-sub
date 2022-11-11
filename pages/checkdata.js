import { useRouter } from 'next/router'
import style from '../styles/Plan.module.scss'
import Headerpage from '../componance/header.page'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Checkdata() {
          const router = useRouter()
          const { nftAddress, ownerDiscordId, discordGuildId, ownerWalletAddress, projectName, totalSupply, symbol, website, facebook ,twitter, discordInviteLink, etherscan, planId, roleName  } = router.query
          const planData = [
                    {
                              planId:1,
                              name: "FREE",
                    },
                    {
                              planId:2,
                              name: "NOOB",
                    },
                    {
                              planId:3,
                              name: "PRO",
                    }
          ]

          return <div>
                    <div className={styles.container}>
                                        <Headerpage />
                    </div>
                    <div className={style.plans2}>
                              <div className={style.planbox}>
                                                            <div className={style.planoptions}>
                                                                      <p className={style.mostpop}><p className={style.mostpoptext}>Confirmation</p></p>
                                                                      <div className={style.formbox}>
                                                                      <div className={style.row}>
                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="nftAddress" >
                                                                                                                        NFT Address
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{nftAddress}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="symbol">
                                                                                                                        Symbol
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{symbol}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="ownerDiscordId" >
                                                                                                                        Owner Discord ID
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{ownerDiscordId}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="website" >
                                                                                                                        Website
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{website}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="discordGuildId" >
                                                                                                                        Discord Guild Id
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{discordGuildId}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div>
                                                                                                              <div className={style.column}>
                                                                                                                        <label for="facebook" >
                                                                                                                                  Facebook
                                                                                                                        </label>
                                                                                                                        <div className={style.shocheckdata}>
                                                                                                                        <p>{facebook}</p>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>

                                                                                                    <div className={style.column}>
                                                                                                              <label for="projectName" >
                                                                                                                        Project Name
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{projectName}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="twitter">
                                                                                                                        Twitter
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{twitter}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="totalSupply">
                                                                                                                        Total Supply
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{totalSupply}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="discordInviteLink">
                                                                                                                        Discord Invite Link
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{discordInviteLink}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="roleName">
                                                                                                                        Role
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{roleName}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="etherscan">
                                                                                                                        Etherscan
                                                                                                              </label>
                                                                                                              <div className={style.shocheckdata}>
                                                                                                              <p>{etherscan}</p>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>



                                                                                          <div className={style.planposition22}>
                                                                                                    <label for="planId">
                                                                                                              Plan
                                                                                                    </label>
                                                                                                    <div className={style.shocheckdata}>
                                                                                                              <p>{planData.find(plan => plan.planId).name}</p>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <Link href="/completed"><button className={style.button1} type="submit" value="Submit" >Submit</button></Link>
                                                                                          
                                                                                          <Link href="/formpage"> <button  className={style.buttonback} type="submit" value="Submit" >Back</button></Link>
                                                                                         
                                                                                </div>
                                                                      </div>
                                                            
                                                            </div>
                              </div>
                    </div>
          </div>
}