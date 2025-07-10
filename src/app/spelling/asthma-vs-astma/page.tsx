import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asthma vs Astma - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "asthma" and "astma". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'asthma vs astma, spelling, correct spelling, asthma, astma, word comparison',
  openGraph: {
    title: 'Asthma vs Astma - Which is Correct?',
    description: 'Learn the correct spelling between "asthma" and "astma". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AsthmaVsAstmaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Asthma vs Astma</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between these commonly confused spellings and when to use each one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-green-800">Correct: Asthma</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>asthma</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Astma</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Astma</strong> is a misspelling. The correct spelling is &quot;asthma&quot; with an &quot;h&quot; after &quot;t&quot;.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Asthma</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Asthma</strong> (noun): A chronic respiratory condition characterized by inflammation and narrowing of the airways, causing difficulty in breathing, wheezing, coughing, and chest tightness.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Asthma</strong> is a medical condition that affects the lungs and can be triggered by various factors including allergies, exercise, and environmental conditions.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She has been diagnosed with <em>asthma</em> since childhood.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The doctor prescribed an inhaler for his <em>asthma</em> symptoms.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;Exercise can trigger <em>asthma</em> attacks in some people.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Asthma</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">Medical terms:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Bronchial asthma</li>
                <li>• Reactive airway disease</li>
                <li>• Respiratory condition</li>
                <li>• Breathing disorder</li>
                <li>• Airway inflammation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Related conditions:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Bronchitis</li>
                <li>• COPD</li>
                <li>• Respiratory distress</li>
                <li>• Wheezing</li>
                <li>• Shortness of breath</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Asthma</strong> is a medical term commonly used in healthcare contexts</li>
            <li>• The word comes from the Greek word &quot;asthma&quot; meaning &quot;panting&quot;</li>
            <li>• Common phrases include &quot;asthma attack,&quot; &quot;asthma symptoms,&quot; and &quot;asthma medication&quot;</li>
            <li>• The word is pronounced as &quot;AZ-muh&quot; with a silent &quot;h&quot;</li>
            <li>• Remember: there&apos;s an &quot;h&quot; in &quot;asthma&quot; even though it&apos;s not pronounced</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;asthma&quot; as &quot;astma&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs because the &quot;h&quot; in &quot;asthma&quot; is silent in pronunciation, so people often forget to include it when spelling the word.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;astma&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;astma&quot; is never correct in English. It&apos;s always a misspelling of &quot;asthma.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as having a silent &quot;h&quot; - even though you don&apos;t pronounce it, it&apos;s there in the spelling. You can also remember that &quot;asthma&quot; comes from Greek and many Greek-derived medical terms have silent letters.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What are common asthma triggers?</h4>
            <p className="text-lg md:text-xl">
              A: Common triggers include allergens (pollen, dust, pet dander), respiratory infections, exercise, cold air, stress, and certain medications. Each person&apos;s triggers can be different.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>asthma</strong>. <strong>Astma</strong> is always incorrect. 
          Remember that &quot;asthma&quot; has a silent &quot;h&quot; after the &quot;t&quot; even though it&apos;s not pronounced. 
          This medical term refers to a chronic respiratory condition that affects breathing.
        </p>
      </div>
    </div>
  )
} 