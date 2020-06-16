import React from 'react';
import Typography from '@material-ui/core/Typography';

const doc1 = `
  &lt;div style="background-color: red"&gt;box1&lt;/div&gt;<br>
  &lt;div style="background-color: blue"&gt;box2&lt;/div&gt;<br>
  &lt;div style="background-color: yellow"&gt;box3&lt;/div&gt;
`;

const doc2 = `
  &lt;div style="background-color: red; width: 100; height: 100 "&gt;box1&lt;/div&gt;<br>
  &lt;div style="background-color: blue; width: 100; height: 100 "&gt;box2&lt;/div&gt;<br>
  &lt;div style="background-color: yellow; width: 100; height: 100 "&gt;box3&lt;/div&gt;
`;

const doc3 = `
  この文字は<span style="color: red">赤色</span>になります。
`.replace(/</g, '&lt;').replace(/>/g, '&gt;');

const PracticeDiffBlockAndInline = () => {

  return (
    <div style={{ width: 1180, margin: 'auto', marginTop: '10px', marginBottom: '10px', borderWidth: '1px', borderStyle: 'solid', padding: '5px' }}>
      <div style={{ marginTop: 10 }}>
        <Typography variant="h5">ブロックレベル要素</Typography>
        <Typography variant="h6">div</Typography>
        <Typography>ブロックレベルであるdivは行全体に広がり１つのブロックとして扱われる</Typography>
        <div style={{ backgroundColor: 'red' }}>box1</div>
        <div style={{ backgroundColor: 'blue' }}>box2</div>
        <div style={{ backgroundColor: 'yellow' }}>box3</div>
        <div style={{ border: 'solid #CCCCCC', marginTop: 10 }} dangerouslySetInnerHTML={{ __html: doc1 }} />
      </div>
      <div style={{ marginTop: 10 }}>
        <Typography variant="h6">divでサイズを指定した場合</Typography>
        <Typography>widthとheightで幅、高さを指定。divなどのブロックレベルは終了タグのあとに必ず改行が入る</Typography>
        <Typography style={{ color: 'red' }}>回り込みを指定しない限りdivは必ず改行される</Typography>
        <div style={{ backgroundColor: 'red', width: 100, height: 100 }}>
          box1
        </div>
        <div style={{ backgroundColor: 'blue', width: 100, height: 100 }}>box2</div>
        <div style={{ backgroundColor: 'yellow', width: 100, height: 100 }}>box3</div>
        <div style={{ border: 'solid #CCCCCC', marginTop: 10 }} dangerouslySetInnerHTML={{ __html: doc2 }} />
      </div>
      <div style={{ marginTop: 10 }}>
        <Typography variant="h5">インライン要素</Typography>
        <Typography variant="h6">span</Typography>
        <Typography>spanは単体では意味を持たないが、&lt;span&gt;～&lt;/span&gt;で囲った部分をインライン要素としてグループ化することができるタグ。</Typography>
        <Typography>spanはインライン要素で文章の一部として利用されるので、前後に改行が入らない。</Typography>
        <Typography>
          この文字は<span style={{ color: 'red' }}>赤色</span>になります。
        </Typography>
        <div style={{ border: 'solid #CCCCCC', marginTop: 10 }} dangerouslySetInnerHTML={{ __html: doc3 }} />
      </div>
      <div style={{ marginTop: 10 }}>
        <Typography variant="h5">インライン要素のルール</Typography>
        <ul>
          <li>width、heightは無視される</li>
          <li>左右のmargin、paddingは<span style={{ color: 'red' }}>適用</span>される</li>
          <li>上下のmargin、paddingは<span style={{ color: 'red' }}>無視</span>される</li>
        </ul>
      </div>
    </div>
  );
};

export default PracticeDiffBlockAndInline;