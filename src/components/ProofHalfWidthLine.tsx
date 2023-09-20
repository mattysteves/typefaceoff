import SizingToken from './SizingToken';
import '../styles/ProofHalfWidthLine.css';

export default function HalfWidthLine(proofingText: string, pointSize: number, lineHeight: number) {
  return (
    <div>
      {SizingToken(pointSize, pointSize * lineHeight)}
      <p
        className="half-width-line proof"
        contentEditable
        onInput={(e) => {
          const all = document.getElementsByClassName('proof');
          for (let i = 0; i < all.length; i++) {
            const element = all[i];
            element.textContent = e.currentTarget.textContent;
          }
        }}
        style={{ fontSize: pointSize, lineHeight: lineHeight, maxHeight: 100 * lineHeight }}
      >
        {proofingText}
      </p>
    </div>
  );
}
