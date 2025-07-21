import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Voucher or Vaucher - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;voucher&quot; and &quot;vaucher&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VoucherVsVaucherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Voucher or Vaucher</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;voucher&quot; and &quot;vaucher&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vaucher</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vaucher&quot; is a misspelling. The correct spelling is &quot;voucher&quot; with an &quot;o&quot; after the &quot;v&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Voucher</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Voucher&quot; is the correct spelling. It refers to a document, receipt, or card that gives evidence of an expenditure or entitles the holder to a discount or service.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Voucher (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A document, receipt, or card that gives evidence of an expenditure or entitles the holder to a discount or service.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She used a <strong>voucher</strong> to get a discount on her purchase.</li>
                  <li>• The company issued travel <strong>vouchers</strong> to employees.</li>
                  <li>• Please present your <strong>voucher</strong> at the counter.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vaucher (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vaucher&quot; is a misspelling of &quot;voucher&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vaucher&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;voucher&quot;</strong> when referring to a document or coupon.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Voucher:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Coupon</li>
                <li>• Ticket</li>
                <li>• Receipt</li>
                <li>• Certificate</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vaucher:</h4>
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
            <li>• <strong>Voucher</strong> is spelled with an &quot;o&quot; after the &quot;v&quot;.</li>
            <li>• Used to refer to a document, coupon, or certificate for discounts or proof of payment.</li>
            <li>• The word &quot;voucher&quot; comes from the verb &quot;to vouch&quot; (to guarantee or affirm).</li>
            <li>• &quot;Vaucher&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vaucher&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vaucher&quot; is never correct. The proper spelling is always &quot;voucher&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;voucher&quot; has an &quot;o&quot; after the &quot;v&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;voucher&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Voucher&quot; means a document, receipt, or card that gives evidence of an expenditure or entitles the holder to a discount or service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;voucher&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;voucher&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;voucher&quot; pronounced?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is pronounced /ˈvaʊtʃər/ (VOW-chur).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Voucher</strong> is the correct spelling with an &quot;o&quot; after the &quot;v&quot;. It refers to a document, coupon, or certificate for discounts or proof of payment. The misspelling &quot;vaucher&quot; is never correct. Use &quot;voucher&quot; to indicate a document or coupon.</p>
      </div>
    </div>
  )
} 