/**
 * @file presentation config
 * @author shenbin
 */
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    dependencies: [
        {
            src: '../../reveal.js/lib/js/classList.js',
            condition: function () {
                return !document.body.classList;
            }
        },
        {
            src: '../../reveal.js/plugin/markdown/marked.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: '../../reveal.js/plugin/markdown/markdown.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: '../../reveal.js/plugin/highlight/highlight.js', async: true,
            callback: function () {
                hljs.initHighlightingOnLoad();
            }
        },
        {
            src: '../../reveal.js/plugin/zoom-js/zoom.js',
            async: true
        },
        {
            src: '../../reveal.js/plugin/notes/notes.js',
            async: true
        },
        {src: '../../../reveal.js-plugins/chart/Chart.min.js'},
        {src: '../../../reveal.js-plugins/chart/csv2chart.js'}
    ]
});
