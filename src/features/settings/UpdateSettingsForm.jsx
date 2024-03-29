import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import Spinner from "../../ui/Spinner"
import { useSettings } from "./useSettings"
import { useUpdateSetting } from "./useUpdateSetting"

function UpdateSettingsForm() {
  const { isLoading, settings: { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = {} } = useSettings()
  const { isUpdating, updateSetting } = useUpdateSetting()

  function handleUpdate(e, field) {
    if (!e.target.value) return

    updateSetting({ [field]: e.target.value })
  }

  if (isLoading) return <Spinner />

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input min={1} type="number" id="min-nights" defaultValue={minBookingLength} disabled={isUpdating} onBlur={e => handleUpdate(e, "minBookingLength")} />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input min={2} type="number" id="max-nights" defaultValue={maxBookingLength} disabled={isUpdating} onBlur={e => handleUpdate(e, "maxBookingLength")} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input min={1} type="number" id="max-guests" defaultValue={maxGuestsPerBooking} disabled={isUpdating} onBlur={e => handleUpdate(e, "maxGuestsPerBooking")} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input min={1} type="number" id="breakfast-price" defaultValue={breakfastPrice} disabled={isUpdating} onBlur={e => handleUpdate(e, "breakfastPrice")} />
      </FormRow>
      <div></div>
    </Form>
  )
}

export default UpdateSettingsForm
