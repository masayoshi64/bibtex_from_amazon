window.onload = function () {
    // html要素を取得
    var title_html = document.title;
    var info_html = Array.from(document.getElementsByClassName('detail-bullet-list')[0].children);
    var info_dict = {};
    info_html.forEach(child => {
        info_dict[child.children[0].children[0].textContent.slice(0, -3)]
            = child.children[0].children[1].textContent;
    });

    // bibtexの要素の取得
    var title = title_html.split('|')[0];
    var author = title_html.split('|')[1];
    var publisher = info_dict['出版社'];
    var year = info_dict['発売日'];

    //bibtex形式に整形
    var data_bib =
        `@book{hoge,
        title = {${title}},
        author = {${author}},
        year = {${year}},
        publisher = {${publisher}}
    }`;

    //出力
    console.log(data_bib);
};