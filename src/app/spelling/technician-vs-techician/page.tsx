import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Technician or Techician - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;technician&quot; and &quot;techician&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TechnicianVsTechicianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Technician or Techician</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;technician&quot; and &quot;techician&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Techician</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Techician&quot; is a misspelling. The correct spelling is &quot;technician&quot; with &quot;n&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Technician</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Technician&quot; is the correct spelling. It means a skilled worker in technology.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Technician (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person skilled in the technical details of a subject or occupation; someone who maintains and repairs technical equipment; a specialist in a particular technical field.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>technician</strong> fixed the computer.</li>
                  <li>• She works as a lab <strong>technician</strong>.</li>
                  <li>• The <strong>technician</strong> repaired the equipment.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Techician (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Techician&quot; is a misspelling of &quot;technician&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Techician&quot; is not used in standard English.</li>
                  <li>• Always use <strong>technician</strong> when referring to skilled workers.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Technician:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Tech</li>
                <li>• Specialist</li>
                <li>• Expert</li>
                <li>• Repairer</li>
                <li>• Skilled worker</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Techician:</h4>
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
            <li>• <strong>Technician</strong> is spelled with &quot;n&quot; in the middle: tech-ni-cian.</li>
            <li>• It is commonly used in technical and professional contexts.</li>
            <li>• &quot;Techician&quot; is never correct in any context.</li>
            <li>• The word comes from &quot;technic&quot; + &quot;-ian&quot; suffix.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;techician&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;techician&quot; is never correct. The proper spelling is always &quot;technician.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;technician&quot; has &quot;n&quot; in the middle - think of it as &quot;tech-ni-cian.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between technician and tech?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tech&quot; is a shortened form, while &quot;technician&quot; is the full professional title.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;technician&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;technician&quot; is appropriate in formal and professional writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;technician&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;techician&quot; often happens by omitting the &quot;n&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;technician&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: lab technician, computer technician, medical technician, and service technician.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;technician&quot; always about technology?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;technician&quot; can refer to skilled workers in various fields, not just technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;technician&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;technician&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Technician</strong> is the correct spelling with &quot;n&quot; in the middle: tech-ni-cian. It means a person skilled in the technical details of a subject or occupation. The misspelling &quot;techician&quot; is never correct. Always use &quot;technician&quot; when referring to skilled technical workers, specialists, or experts in any field.</p>
      </div>
    </div>
  )
} 