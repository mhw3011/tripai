function formatTravelDates(dates) {
  if (!dates || dates.length === 0) return "Dates not available";

  if (dates.length === 1) return dates[0];

  return `${dates[0]} → ${dates[dates.length - 1]}`;
}

export default function TripCard({ trip, index, navigate }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-orange-50 to-white-100 to-orange-50 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
      <div className="p-8 relative z-10">
        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-400 rounded-full">
          Trip #{index + 1}
        </span>

        <h1 className="mt-4 text-3xl font-bold text-gray-800">
          {trip.itinerary?.arrivalCity || "Unknown Destination"}
        </h1>

        <p className="mt-2 text-gray-500">
          Airline : {trip.itinerary?.airline || "Flight details not available"}
        </p>

        <p className="mt-4 text-sm text-gray-500">
          {formatTravelDates(trip.itinerary?.travelDates)}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => navigate(`/trip/${trip._id}`)}
            className="px-4 py-2 rounded-xl bg-orange-400 text-white text-sm font-medium hover:bg-orange-600 transition"
          >
            View itinerary →
          </button>
        </div>
      </div>
    </div>
  );
}
