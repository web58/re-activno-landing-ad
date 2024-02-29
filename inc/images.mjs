import gulp from 'gulp';
import gulpIf from 'gulp-if';
import squoosh from 'gulp-libsquoosh';
import svgmin from 'gulp-svgmin';
import svgSprite from 'gulp-svg-sprite';

const {
  src,
  dest
} = gulp;
const isProd = process.env.NODE_ENV === 'production';

const copyRasterGraphics = () => {
  return src( [ './src/include/landing-service-ad/img/**/**.{jpg,jpeg,png,gif,webp}' ] )
    .pipe( gulpIf( isProd, squoosh() ) )
    .pipe( dest( './build/include/landing-service-ad/img/' ) );
};

const copyVectorGraphics = () => {
  return src( [ './src/include/landing-service-ad/img/**/**.svg', '!./src/include/landing-service-ad/img/sprite/**.svg' ] )
    .pipe( gulpIf( isProd, svgmin() ) )
    .pipe( dest( './build/include/landing-service-ad/img/' ) );
};

const compileSprite = () => {
  return src( './src/include/landing-service-ad/img/sprite/**.svg' )
    .pipe( gulpIf( isProd, svgmin() ) )
    .pipe( svgSprite( {
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      },
    } ) )
    .pipe( dest( './build/include/landing-service-ad/img/' ) );
}

export {
  copyRasterGraphics,
  copyVectorGraphics,
  compileSprite,
};