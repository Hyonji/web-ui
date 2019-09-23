import React from 'react';
import {connect} from "react-redux";
import {showBoth, showWomen, showMen} from "../redux/actions/switchActions";

import {Account} from "../presentationals/navigations/bars/Account";
import {PortalNav} from "../presentationals/navigations/bars/PortalNav";
import SearchBox from "../presentationals/inputs/searchfields/SearchBox";
import Circle from "../presentationals/graphics/shapes/Circle";
import TitleBig from "../presentationals/display/titles/TitleBig";
import Standard from "../layouts/Standard";
import HomeBox from "../layouts/box/HomeBox";
import TitleMedium from "../presentationals/display/titles/TitleMedium";

import styles from '../scss/modules/exports/sections.module.scss';
import {Switcher} from "../presentationals/navigations/Switcher";

interface AppProps {
    item: any;
    addItem: any;
    toggleItem: any;
}

export const App: React.FC<AppProps> = (props) => {
    return (
        <div className='app'>
            <header className='header-top'>
                <div className='title-nimado'>
                    <TitleBig title='Nitji'/>
                    <Circle/>
                </div>

                <article className='search-nimado'>
                    <SearchBox/>
                </article>

                <nav className='nav-account'>
                    <Account/>
                </nav>
            </header>

            <nav className='nav-nimado'>
                <PortalNav/>
            </nav>

            <main className='content-nimado'>
                <div className='home-top'>
                    <div className='home-top-container'>
                        <div className='home-top-header'>
                            <TitleMedium title='Top'/>
                        </div>

                        <div className='home-cafe-main'>
                            <div className='Recipes'>
                                <h5 style={{marginTop: 0}}>Desserts</h5>
                                <p>Icecream and cake</p>
                            </div>

                            <div className='blogs'>
                                <h5>Blogs</h5>
                            </div>

                            <div className='Corner'>
                                <h5>Corner</h5>
                            </div>
                        </div>

                        <div className='home-cafe-footer'>
                            See also
                        </div>
                    </div>
                </div>

                <div className='home-cafe'>
                    <div className='box-cafe box-container'>
                        <HomeBox
                            titleHeader={'Cafe'}
                            titleMain={'Desserts'}
                            contentMain={'Cake. Icecream.'}
                            contentFooter={'See also'}
                            color={styles.cafe}
                        />
                    </div>
                </div>

                <div className='home-news'>
                    <div className='box-news box-container'>
                        <HomeBox
                            titleHeader={'News'}
                            titleMain={'Korea'}
                            contentMain={'Seoul. Busan.'}
                            contentFooter={'See also'}
                            color={styles.news}
                        />
                    </div>
                </div>

                <div className='home-shopping'>
                    <div className='box-shopping box-container'>
                        <HomeBox
                            titleHeader={'Shopping'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                            color={styles.shopping}
                        />
                    </div>
                </div>

                <div className='home-tv'>
                    <div className='box-tv box-container'>
                        <HomeBox
                            titleHeader={'TV'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                            color={styles.tv}
                        />
                    </div>
                </div>

                <div className='home-weather'>
                    <div className='box-weather box-container'>
                        <HomeBox
                            titleHeader={'Weather'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                            color={styles.weather}
                        />
                    </div>
                </div>

                <div className='home-children'>
                    <div className='box-children box-container'>
                        <HomeBox
                            titleHeader={'Children'}
                            titleMain={'Clothes'}
                            contentMain={'Pants. Sweaters.'}
                            contentFooter={'See also'}
                            color={styles.children}
                        />
                    </div>
                </div>

                <nav className='home-wise'>
                    <button
                        onClick={() =>
                            props.addItem({
                                text: 'You begin to remove' +
                                    ' a mountain by carrying away small stones!'
                            })
                        }
                    >
                        Show text
                    </button>

                    <button
                        onClick={() =>
                            props.toggleItem
                        }
                    >
                        Hide text
                    </button>
                    <p>{props.item}</p>
                </nav>
                
                <Switcher color={'t'} showText={'test'} hideText={'test'} />
            </main>

            <footer className='footer-bottom'>
                <Standard version={'v0.1.6'}/>
            </footer>
        </div>
    );
};

// AppContainer.js
const mapStateToProps = (state: any) => ({
    item: state.item,
});

const mapDispatchToProps = {
    showBoth,
    showWomen,
    showMen
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
