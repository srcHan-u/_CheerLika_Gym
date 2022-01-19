import { svgo } from "gulp-imagemin";
import svgSprite from "gulp-svg-sprite";
export const svgSpriteSimple = () => {
	return app.gulp.src(`${app.path.src.svgiconsSimple}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprite({
            shape: {
                dimension:{
                    // maxHeight: 24,
                    // maxWidth: 24,
                },
                transform: [
                    {
                        svgo:{
                            plugins: [
                                {removeAttrs: {
                                    attrs: ['class', 'data-name', 'fill', 'stroke.*']
                                }},
                            ]
                        }
                    }
                ]
            },
			mode: {
				stack: {
					sprite: `../icons/icons-simple.svg`,
					// Создавать страницу с перечнем иконок
					// example: true
				},
			},
		}
		))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}

export const svgSpriteComplex = () => {
	return app.gulp.src(`${app.path.src.svgiconsComplex}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprite({
            shape: {
                dimension:{
                    // maxHeight: 24,
                    // maxWidth: 24,
                },
                transform: [
                    {
                        svgo:{
                            plugins: [
                                {removeAttrs: {
                                    attrs: ['class', 'data-name']
                                }},
                                {
                                    removeUseLessStrokeAndFill: false,
                                },
                                {
                                    inlineStyles: true,
                                }
                            ]
                        }
                    }
                ]
            },
			mode: {
				stack: {
					sprite: `../icons/icons-complex.svg`,
					// Создавать страницу с перечнем иконок
					// example: true
				},
			},
		}
		))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}