function js_render(template, data) {
    return template
        .replace(/\n/g, "~")
        .replace(/\{([^\:\}]+)\}|\{ds\:(\w+)\}(.*?)\{\/ds\}/g, function(match, name, dataset, nestedTemplate) {
            let output = '';
            try {
                if (name) {
                    return data[name];
                }
                let dataSetValues = data[dataset];
                for (let key in dataSetValues) {
                    if (dataSetValues.hasOwnProperty(key)) {
                        output += js_render(nestedTemplate, dataSetValues[key]);
                    }
                }
            } catch (error) {
            }
            return output;
        })
        .replace(/~/g, '\n');
}


function vypiskurzy(data) {
    const template = `
        <h3>Kurzy <a href="{url}">{banka}</a></h3><hr>
        <table class="tb">
            <tr class="na">
                <td class="na1">Měna</td>
                <td class="na2">Jednotka</td>
                <td class="na3">Kurz</td>
            </tr>
            {ds:kurzy}
            <tr class="ne">
                <td class="ne1">{nazev}</td>
                <td class="ne2">{jednotka}</td>
                <td class="ne3">{dev_stred}</td>
            </tr>
            {/ds}
        </table>
        <hr>
    `;

    const html = js_render(template, data);
    document.getElementById("kl").innerHTML = html;
}