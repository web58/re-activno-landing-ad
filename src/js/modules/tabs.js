const getPrevTab = ( tabs ) => {
  const tabsCount = tabs.tabsBtns.length;
  const currentActiveIndex = tabs.tabs.querySelector( '[aria-selected="true"]' ).id.slice( tabs.selector.length );
  if ( currentActiveIndex === '1' ) {
    return tabs.tabs.querySelector( `#${tabs.selector}${tabsCount}` );
  }

  return tabs.tabs.querySelector( `#${tabs.selector}${currentActiveIndex - 1}` );
};

const getNextTab = ( tabs ) => {
  const tabsCount = tabs.tabsBtns.length;
  const currentActiveIndex = tabs.tabs.querySelector( '[aria-selected="true"]' ).id.slice( tabs.selector.length );
  if ( currentActiveIndex === `${tabsCount}` ) {
    return tabs.tabs.querySelector( `#${tabs.selector}1` );
  }

  return tabs.tabs.querySelector( `#${tabs.selector}${parseInt(currentActiveIndex, 10) + 1}` );
};


const initSwitchers = ( tabs ) => {
  const tabSwitchers = document.querySelector( '.includes-tabs__switchers' );
  if ( !tabSwitchers ) return;

  tabSwitchers.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    if ( evt.target.closest( '.includes-tabs__switcher--prev' ) ) {
      tabs.switchTabs( getPrevTab( tabs ) );
    }
    if ( evt.target.closest( '.includes-tabs__switcher--next' ) ) {
      tabs.switchTabs( getNextTab( tabs ) );
    }
  } );
};

export const initIncludesTabs = () => {
  const tabsBlock = new JustTabs( 'includes', {
    activeBtnClass: 'is-changed'
  } );

  if ( !tabsBlock ) return;
  initSwitchers( tabsBlock );
};
