<div class="text-end d-flex gap-3 align-items-center">

 @if($data->incident_type==1)

<a style="cursor:pointer" class="btn btn-icon text-danger p-0 fs-4" data-bs-placement="top" data-bs-toggle="tooltip" title="{{__('messages.lbl_reply') }}"
        onclick="replyPopup({{ $data->id }})">
        <i class="ph ph-chat"></i>
</a>
@endif
</div>