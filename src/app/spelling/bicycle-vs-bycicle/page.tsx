import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bicycle vs Bycicle - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling: "bicycle" vs "bycicle". Discover the proper spelling, definition, usage examples, and tips to remember the correct form.',
  keywords: 'bicycle, bycicle, spelling, correct spelling, word comparison, English spelling',
}

export default function BicycleVsByciclePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Bicycle or Bycicle</h1>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-green-800">Bicycle</h2>
          </div>
          <p className="text-green-700 text-lg">Correct spelling</p>
        </div>
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-red-800">Bycicle</h2>
          </div>
          <p className="text-red-700 text-lg">Incorrect spelling</p>
        </div>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Definition</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-lg mb-4"><strong>&quot;Bicycle&quot;</strong> is a vehicle with two wheels that you ride by pushing pedals with your feet. It is used for transportation, exercise, and recreation.</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>A two-wheeled vehicle powered by pedaling</li>
            <li>Commonly called a &quot;bike&quot;</li>
            <li>Used for commuting, sport, and leisure</li>
          </ul>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-lg"><strong>Correct:</strong> &quot;She rides her bicycle to school every day.&quot;</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-lg"><strong>Correct:</strong> &quot;He bought a new bicycle for his birthday.&quot;</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-lg"><strong>Correct:</strong> &quot;Bicycles are a great way to stay fit.&quot;</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Synonyms</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-lg mb-4">Words with similar meanings to &quot;bicycle&quot;:</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Bike</li>
            <li>Cycle</li>
            <li>Two-wheeler</li>
            <li>Pushbike</li>
          </ul>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>&quot;Bicycle&quot; comes from the Latin &quot;bi-&quot; (two) and Greek &quot;kyklos&quot; (wheel)</li>
            <li>Common misspellings include &quot;bycicle,&quot; &quot;bicyle,&quot; and &quot;bicycal&quot;</li>
            <li>Remember: &quot;bi&quot; (two) + &quot;cycle&quot; (wheel)</li>
          </ul>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Why do people misspell &quot;bicycle&quot; as &quot;bycicle&quot;?</h3>
            <p className="text-lg">The confusion often comes from the pronunciation and the &quot;y&quot; sound, but the correct spelling is always &quot;bicycle.&quot;</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Is &quot;bycicle&quot; ever correct?</h3>
            <p className="text-lg">No, &quot;bycicle&quot; is never the correct spelling. Always use &quot;bicycle.&quot;</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">How can I remember the correct spelling?</h3>
            <p className="text-lg">Think of &quot;bi&quot; (two) and &quot;cycle&quot; (wheel) to remember the correct spelling.</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <p className="text-lg mb-4"><strong>Remember:</strong> The correct spelling is <strong>&quot;bicycle&quot;</strong> with an &quot;i&quot; after the &quot;b&quot; and a &quot;y&quot; after the &quot;c.&quot;</p>
          <p className="text-lg mb-4">&quot;Bycicle&quot; is always incorrect and should be avoided in all contexts.</p>
          <p className="text-lg">Use &quot;bicycle&quot; when referring to a two-wheeled vehicle powered by pedaling.</p>
        </div>
      </section>
    </div>
  )
} 