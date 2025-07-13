import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acknowledgement or Acknowledgment - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acknowledgement&quot; and &quot;acknowledgment&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcknowledgementVsAcknowledgmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Acknowledgement or Acknowledgment</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;acknowledgement&quot; and &quot;acknowledgment&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acknowledgement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acknowledgement&quot; is the British English spelling with &quot;e&quot; before &quot;ment&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acknowledgment</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acknowledgment&quot; is the American English spelling without the &quot;e&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acknowledgement (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Recognition or admission of the existence or truth of something; an expression of appreciation or thanks. (British English spelling)</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She sent an <strong>acknowledgement</strong> of receipt.</li>
                  <li>• The author&apos;s <strong>acknowledgement</strong> thanked her family.</li>
                  <li>• His <strong>acknowledgement</strong> of the problem was the first step.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acknowledgment (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Recognition or admission of the existence or truth of something; an expression of appreciation or thanks. (American English spelling)</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She sent an <strong>acknowledgment</strong> of receipt.</li>
                  <li>• The author&apos;s <strong>acknowledgment</strong> thanked her family.</li>
                  <li>• His <strong>acknowledgment</strong> of the problem was the first step.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acknowledgement/Acknowledgment:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Recognition</li>
                <li>• Admission</li>
                <li>• Confirmation</li>
                <li>• Acceptance</li>
                <li>• Appreciation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Usage Note:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Both spellings are correct</li>
                <li>• Use based on your audience</li>
                <li>• Be consistent within a document</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Acknowledgement</strong> is the British English spelling with &quot;e&quot; before &quot;ment&quot;.</li>
          <li>• <strong>Acknowledgment</strong> is the American English spelling without the &quot;e&quot;.</li>
          <li>• Both spellings are equally correct and acceptable.</li>
          <li>• Choose based on your target audience or style guide.</li>
          <li>• Be consistent with your choice throughout a document.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Which spelling should I use?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;acknowledgement&quot; for British English and &quot;acknowledgment&quot; for American English. Choose based on your audience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are both spellings acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, both spellings are correct. It&apos;s a matter of regional preference and style guide requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between the two spellings?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The only difference is the presence of &quot;e&quot; before &quot;ment&quot; in the British spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Which spelling is more common?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Acknowledgment&quot; is more common in American publications, while &quot;acknowledgement&quot; is more common in British publications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Should I be consistent with my choice?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, always be consistent with your spelling choice within a single document or publication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: acknowledgement/acknowledgment of receipt, book acknowledgements/acknowledgments, and public acknowledgement/acknowledgment.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Both <strong>acknowledgement</strong> (British) and <strong>acknowledgment</strong> (American) are correct spellings. Choose based on your target audience and be consistent throughout your writing.</p>
      </div>
    </div>
  )
} 