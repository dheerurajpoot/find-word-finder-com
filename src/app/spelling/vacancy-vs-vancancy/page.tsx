import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vacancy or Vancancy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vacancy&quot; and &quot;vancancy&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VacancyVsVancancyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vacancy or Vancancy</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vacancy&quot; and &quot;vancancy&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vancancy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vancancy&quot; is a misspelling. The correct spelling is &quot;vacancy&quot; with an &quot;a&quot; after the &quot;v&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vacancy</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vacancy&quot; is the correct spelling. It means an unoccupied position or space.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vacancy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An unoccupied position or space; a job or room that is available.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• There is a <strong>vacancy</strong> at the hotel.</li>
                  <li>• The company has a <strong>vacancy</strong> for a manager.</li>
                  <li>• The <strong>vacancy</strong> was filled quickly.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vancancy:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vancancy&quot; is a misspelling of &quot;vacancy&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vancancy&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vacancy</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vacancy:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Opening</li>
                <li>• Position</li>
                <li>• Space</li>
                <li>• Availability</li>
                <li>• Slot</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vancancy:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Vacancy</strong> is spelled with an &quot;a&quot; after the &quot;v&quot;.</li>
            <li>• &quot;Vancancy&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vacantia&quot; meaning &quot;emptiness&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vancancy&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vancancy&quot; is never correct. The proper spelling is always &quot;vacancy&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vacancy&quot; has an &quot;a&quot; after the &quot;v&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does vacancy mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Vacancy&quot; means an unoccupied position or space.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vacancy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vancancy&quot; often happens by adding an extra &quot;n&quot;. Always use one &quot;n&quot; after the &quot;a&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vacancy&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vacancy&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vacancy</strong> is the correct spelling, meaning an unoccupied position or space. The misspelling &quot;vancancy&quot; is never correct. Always use &quot;vacancy&quot; in your writing.</p>
      </div>
    </div>
  )
} 