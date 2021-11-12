let styles = [ 'Джаз', "Блюз"];
styles.push("Рок-н-ролл");
for (let i = 0; i < styles.length;) {
    if (i = styles.length / 2) {
        styles[i] = "Классика";
            }
}
alert(styles.shift());
styles.unshift("Рэп", "Рэгги");
alert(styles);





