export const textToLink = ({ description }) => {
    // 正規表現でURLを抽出
    const regexp_url = /(https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)/g;
    let linkedDescription = description.replace(regexp_url, '<a href="$1" target="_blank">$1</a>');

    // // 正規表現で#を抽出
    // const regexp_hash = /#+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;
    // linkedComment = linkedComment.replace(
    //     regexp_hash,
    //     '<a href="/search?q=$1&type=hash">#$1</a>'
    // );

    // 正規表現で@を抽出
    const regexp_at = /@+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;
    linkedDescription = linkedDescription.replace(
        regexp_at,
        '<a href="/search?q=$1&type=at" target="_blank">@$1</a>'
    );

    return linkedDescription;
};