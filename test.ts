(Element.prototype as any).matches = undefined;
(Element.prototype as any).webkitMatchesSelector = undefined;

import { expect } from 'chai';
import closest from "./index";

describe("closest", function () {
  it('should work with null instead of element', function () {
    expect(closest(null, 'inner')).to.be.null;
  });

  it('should get closest elem', function () {
    document.body.innerHTML = `
    <div id="outer">
      <div id="inner"></div>
    </div>
    `;

    let inner = document.getElementById('inner');
    let outer = document.getElementById('outer');

    expect(closest(inner, '#outer')).to.be.equal(outer);
  });
});
