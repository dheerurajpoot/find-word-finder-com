import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ticket or Tiket - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ticket&quot; and &quot;tiket&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TicketVsTiketPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ticket or Tiket</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ticket&quot; and &quot;tiket&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tiket</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tiket&quot; is a misspelling. The correct spelling is &quot;ticket&quot; with a &quot;c&quot; before the &quot;k.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ticket</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ticket&quot; is the correct spelling. It means a piece of paper or card for admission or travel.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ticket (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A piece of paper or card that serves as evidence of payment or right to admission.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I bought a <strong>ticket</strong> for the concert.</li>
                  <li>• The <strong>ticket</strong> cost $25 for the movie.</li>
                  <li>• She lost her train <strong>ticket</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tiket (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tiket&quot; is a misspelling of &quot;ticket&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tiket&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ticket</strong> when referring to admission or travel documents.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ticket:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Pass</li>
                <li>• Voucher</li>
                <li>• Coupon</li>
                <li>• Receipt</li>
                <li>• Admission</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tiket:</h4>
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
            <li>• <strong>Ticket</strong> is spelled with a &quot;c&quot; before the &quot;k.&quot;</li>
            <li>• It can refer to various types of admission or travel documents.</li>
            <li>• &quot;Tiket&quot; is never correct in any context.</li>
            <li>• The word comes from Old French &quot;etiquet&quot; meaning &quot;note, label.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tiket&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tiket&quot; is never correct. The proper spelling is always &quot;ticket.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;ticket&quot; has a &quot;c&quot; before the &quot;k&quot; - think of it as &quot;tic-ket.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a ticket and a pass?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A ticket is usually for a specific event or journey, while a pass is often for multiple uses or extended access.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;ticket&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ticket&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;ticket&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tiket&quot; often happens due to pronunciation confusion or forgetting the &quot;c.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;ticket&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: ticket office, ticket price, ticket stub, and ticket holder.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ticket&quot; always about events or travel?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ticket&quot; can also refer to parking tickets, speeding tickets, or other official documents.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;ticket&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ticket&quot; can be used as a verb meaning to issue a ticket (e.g., for a traffic violation).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ticket</strong> is the correct spelling with a &quot;c&quot; before the &quot;k.&quot; It means a piece of paper or card for admission or travel. The misspelling &quot;tiket&quot; is never correct. Always use &quot;ticket&quot; when referring to admission documents, travel passes, or official notices.</p>
      </div>
    </div>
  )
} 