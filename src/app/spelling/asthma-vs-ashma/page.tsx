import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asthma or Ashma - Which is Correct?",
  description: "Learn the correct spelling between 'asthma' and 'ashma'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AsthmaVsAshmaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Asthma or Ashma</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Which spelling is correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between &quot;Asthma&quot; and &quot;Ashma&quot;. These are commonly confused spellings and how to use them correctly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="text-3xl font-extrabold text-red-600 mb-2">❌ Ashma</div>
          <div className="text-lg md:text-xl text-red-700">
            This spelling is incorrect. &quot;Ashma&quot; is missing the &quot;t&quot; - it should be &quot;asthma.&quot;
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div className="text-3xl font-extrabold text-green-600 mb-2">✅ Asthma</div>
          <div className="text-lg md:text-xl text-green-700">
            This is the correct spelling. &quot;Asthma&quot; is a respiratory condition that causes breathing difficulties.
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Definition</h2>
        <div className="text-lg md:text-xl space-y-4">
          <p>
            <span className="font-bold">Asthma</span> (noun): A respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing; a chronic inflammatory disease of the airways.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Examples:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>She has had asthma since childhood.</li>
              <li>Asthma attacks can be triggered by allergies.</li>
              <li>He uses an inhaler to manage his asthma.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;asthma&quot;:</div>
            <ul className="list-disc list-inside space-y-1">
              <li>Bronchial asthma</li>
              <li>Respiratory condition</li>
              <li>Breathing disorder</li>
              <li>Lung condition</li>
              <li>Airway disease</li>
              <li>Bronchospasm</li>
              <li>Wheezing</li>
              <li>Shortness of breath</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Related terms:</div>
            <ul className="list-disc list-inside space-y-1">
              <li>Inhaler</li>
              <li>Bronchodilator</li>
              <li>Wheezing</li>
              <li>Shortness of breath</li>
              <li>Allergies</li>
              <li>Respiratory</li>
              <li>Lungs</li>
              <li>Breathing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Usage Notes</h2>
        <div className="text-lg md:text-xl space-y-4">
          <p>
            <strong>Note:</strong> &quot;Asthma&quot; is the correct spelling. &quot;Ashma&quot; is a common misspelling—remember to include the &quot;t&quot;: a-s-t-h-m-a.
          </p>
          <p>
            <strong>Tip:</strong> Think of &quot;asthma&quot; as having the same &quot;th&quot; as in &quot;breath&quot; or &quot;breathing.&quot; The word comes from Greek &quot;asthma&quot; meaning panting.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Is it ashma or asthma?</div>
            <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;asthma.&quot; &quot;Ashma&quot; is incorrect—it&apos;s missing the &quot;t.&quot;</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce asthma?</div>
            <div className="text-lg md:text-xl text-muted-foreground">It&apos;s pronounced as /ˈæzmə/ (AZ-muh).</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What does asthma mean?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Asthma means a respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing; a chronic inflammatory disease of the airways.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">How do you use asthma in a sentence?</div>
            <div className="text-lg md:text-xl text-muted-foreground">You can say &quot;She has asthma&quot; or &quot;Asthma attacks can be serious.&quot;</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Is asthma formal or informal?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Asthma is appropriate in both formal and informal contexts.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between asthma and bronchitis?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Asthma is a chronic condition with recurring attacks, while bronchitis is usually an acute infection of the bronchial tubes.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Can asthma be used in everyday conversation?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I have asthma&quot; or &quot;asthma attack&quot; are common uses.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of asthma?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Asthma comes from Greek &quot;asthma&quot; meaning panting or shortness of breath.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Is asthma used in medical contexts?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Asthma diagnosis&quot; and &quot;asthma treatment&quot; are very common in medical and healthcare contexts.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Why is ashma wrong?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Ashma is wrong because it&apos;s missing the &quot;t.&quot; The correct spelling is a-s-t-h-m-a.</div>
          </div>

          <div className="pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with asthma?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: asthma attack, asthma inhaler, asthma symptoms, asthma medication, and asthma triggers.</div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Correct spelling:</strong> Asthma
        </p>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Incorrect spelling:</strong> Ashma
        </p>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Meaning:</strong> A respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing; a chronic inflammatory disease of the airways.
        </p>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Remember:</strong> Always include the &quot;t&quot; in asthma. Think of &quot;breath&quot; or &quot;breathing&quot; to remember the correct spelling pattern.
        </p>
      </div>
    </div>
  );
} 