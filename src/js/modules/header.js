import {
  justBurgerConfig,
  observerConfig
} from './configs.js';

import {
  isEscKey,
  fadeOut
} from './utils.js';

const headerNode = document.querySelector( '.site-header' );
const headerTopNode = document.querySelector( '.header-top' );
const headerModalNode = document.querySelector( '.header-modal' );
const burgerConfig = Object.assign( justBurgerConfig, {
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
} );

const burgerBtn = new JustBurger( burgerConfig );

function openMobileMenu() {
  document.documentElement.classList.add( 'is-block-scroll' );
  headerModalNode.style.display = 'block';
  document.addEventListener( 'keydown', onEscKeydown );
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-block-scroll' );
  fadeOut( headerModalNode );
  document.removeEventListener( 'keydown', onEscKeydown );
}

const onEscKeydown = ( evt ) => {
  if ( isEscKey( evt ) ) {
    burgerBtn.close();
  }
};

const closeMenuAfterClick = ( selector ) => {
  document.querySelectorAll( selector ).forEach( item => {
    item.addEventListener( 'click', () => {
      burgerBtn.close();
    } );
  } );
};

const initStickyHeader = ( node, target ) => {
  if ( !node || !target ) return;
  const cb = ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( !entry.isIntersecting ) {
        node.classList.add( 'is-sticky' );
      } else {
        node.classList.remove( 'is-sticky' );
      }
    } );
  };

  new IntersectionObserver( cb, observerConfig.header ).observe( target );
};

export const initHeaderSettings = () => {
  if ( !headerModalNode ) return;

  headerModalNode.id = burgerConfig.menuId;

  closeMenuAfterClick( '.header-modal .site-nav-list a' );
  closeMenuAfterClick( '.header-modal__modal-btn' );

  initStickyHeader( headerNode, headerTopNode );
};
